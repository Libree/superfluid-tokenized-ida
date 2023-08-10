const { expect } = require("chai")
const { Framework } = require("@superfluid-finance/sdk-core")
const { ethers } = require("hardhat")
const {
    deployTestFramework
} = require("@superfluid-finance/ethereum-contracts/dev-scripts/deploy-test-framework")
const TestToken = require("@superfluid-finance/ethereum-contracts/build/contracts/TestToken.json")

let sf
let spreader: any
let dai
let daix: any

// Test Accounts
let admin: any
let alice: any
let bob: any
const subscriptionSupply = 100
const decimals = 10 ** 6

// Constants
const expecationDiffLimit = 10 // sometimes the IDA distributes a little less wei than expected. Accounting for potential discrepency with 10 wei margin

const thousandEther = ethers.utils.parseEther("10000")

before(async function () {
    // get hardhat accounts
    ;[admin, alice, bob] = await ethers.getSigners()

    let sfDeployer = await deployTestFramework()

    //// GETTING SUPERFLUID FRAMEWORK SET UP

    // deploy the framework locally
    let contractsFramework = await sfDeployer.frameworkDeployer.getFramework()

    // initialize framework
    sf = await Framework.create({
        chainId: 31337,
        provider: admin.provider,
        resolverAddress: contractsFramework.resolver, // needed as placeholder
        protocolReleaseVersion: "test"
    })

    //// DEPLOYING DAI and DAI wrapper super token (which will be our `spreaderToken`)

    // Deploy a fake erc20 test token
    await sfDeployer.frameworkDeployer.deployWrapperSuperToken(
        "Fake DAI Token",
        "fDAI",
        18,
        ethers.utils.parseEther("100000000").toString()
    )

    // create a fake erc20 wrapper super token around the DAI token
    daix = await sf.loadSuperToken("fDAIx")

    // get the ethers contract object for the fake erc20 test token
    dai = new ethers.Contract(
        daix.underlyingToken.address,
        TestToken.abi,
        admin
    )

    //// SETTING UP NON-ADMIN ACCOUNTS WITH DAIx

    // minting test DAI
    await dai.connect(admin).mint(admin.address, thousandEther)
    await dai.connect(alice).mint(alice.address, thousandEther)
    await dai.connect(bob).mint(bob.address, thousandEther)

    // approving DAIx to spend DAI
    await dai.connect(admin).approve(daix.address, ethers.constants.MaxInt256)
    await dai.connect(alice).approve(daix.address, ethers.constants.MaxInt256)
    await dai.connect(bob).approve(daix.address, ethers.constants.MaxInt256)

    // Upgrading all DAI to DAIx
    const wrapOperation = daix.upgrade({ amount: thousandEther })
    await wrapOperation.exec(admin)
    await wrapOperation.exec(alice)
    await wrapOperation.exec(bob)

    //// INITIALIZING SPREADER CONTRACT

    const spreaderContractFactory = await ethers.getContractFactory(
        "TokenizedIDA",
        admin
    )

    spreader = await spreaderContractFactory.deploy(
        daix.address,
        "Tokenized SUB",
        "TSUB",
        subscriptionSupply
    )

    //// SUBSCRIBING TO SPREADER CONTRACT'S IDA INDEX

    // subscribe to distribution (doesn't matter if this happens before or after distribution execution)
    const approveSubscriptionOperation = await daix.approveSubscription({
        indexId: "0",
        publisher: spreader.address
    })
    await approveSubscriptionOperation.exec(alice)
    await approveSubscriptionOperation.exec(bob)
})

describe("TokenSpreader Test Sequence", async () => {
    it("Distribution with [ 1 unit issued ] but [ 0 spreaderTokens held ] - gainShare", async function () {
        // ACTIONS

        // Alice claims distribution unit
        await spreader.transfer(alice.address, 1 * decimals);

        // EXPECTATIONS

        // expect alice to have 1 distribution unit
        let aliceSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
            subscriber: alice.address,
            providerOrSigner: alice
        })

        await expect(aliceSubscription.units).to.equal((1 * decimals).toString())

        // distribution SHOULD NOT REVERT if there are outstanding units issued
        await expect(spreader.connect(alice).distribute()).to.be.not.reverted
    })

    it("Distribution with [ 2 units issued to different accounts ] but [ 0 spreaderTokens ] - gainShare", async function () {
        // ACTIONS

        // Bob claims distribution unit
        await spreader.transfer(bob.address, 1 * decimals);

        // EXPECTATIONS

        // expect alice to have 1 distribution unit
        let aliceSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
            subscriber: alice.address,
            providerOrSigner: alice
        })

        await expect(aliceSubscription.units).to.equal((1 * decimals).toString())

        // expect bob to have 1 distribution unit
        let bobSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
            subscriber: bob.address,
            providerOrSigner: bob
        })

        await expect(bobSubscription.units).to.equal((1 * decimals).toString())

        // distribution SHOULD NOT REVERT if there are outstanding units issued
        await expect(spreader.connect(alice).distribute()).to.be.not.reverted
    })

    it("Distribution with [ 2 units issued to different accounts ] and [ 100 spreaderTokens ] - gainShare", async function () {
        let distributionAmount = ethers.utils.parseEther("100")

        // ACTIONS

        // Admin gives spreader 100 DAIx
        await daix
            .transfer({
                receiver: spreader.address,
                amount: distributionAmount
            })
            .exec(admin)

        // (snapshot balances)
        let aliceInitialBlance = await daix.balanceOf({
            account: alice.address,
            providerOrSigner: admin
        })
        let bobInitialBlance = await daix.balanceOf({
            account: bob.address,
            providerOrSigner: admin
        })

        // Distribution executed
        await expect(spreader.connect(admin).distribute()).to.be.not.reverted

        // EXPECTATIONS

        await expect(
            await daix.balanceOf({
                account: alice.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(aliceInitialBlance).add(
                distributionAmount.div(subscriptionSupply)
            ),
            expecationDiffLimit
        )

        await expect(
            await daix.balanceOf({
                account: bob.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(bobInitialBlance).add(
                distributionAmount.div(subscriptionSupply)
            ),
            expecationDiffLimit
        )

        // expect balance of spreader contract to be zeroed out
        await expect(
            await daix.balanceOf({
                account: spreader.address,
                providerOrSigner: admin
            })
        ).to.closeTo(ethers.BigNumber.from("0"), expecationDiffLimit)
    })

    it("Distribution with [ 3 units issued to different accounts ] and [ 100 spreaderTokens ] - gainShare", async function () {
        let distributionAmount = ethers.utils.parseEther("100")

        // ACTIONS

        // Bob claims another distribution unit
        await spreader.transfer(bob.address, 1 * decimals)

        // Admin gives spreader 100 DAIx
        await daix
            .transfer({
                receiver: spreader.address,
                amount: distributionAmount
            })
            .exec(admin)

        // (snapshot balances)
        let aliceInitialBlance = await daix.balanceOf({
            account: alice.address,
            providerOrSigner: admin
        })
        let bobInitialBlance = await daix.balanceOf({
            account: bob.address,
            providerOrSigner: admin
        })

        // Distribution executed
        await expect(spreader.connect(admin).distribute()).to.be.not.reverted

        // EXPECTATIONS

        // expect bob to have 2 distribution units
        let bobSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
            subscriber: bob.address,
            providerOrSigner: bob
        })

        await expect(bobSubscription.units).to.equal((2 * decimals).toString())

        await expect(
            await daix.balanceOf({
                account: alice.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(aliceInitialBlance).add(
                distributionAmount.div(subscriptionSupply)
            ),
            expecationDiffLimit
        )

        await expect(
            await daix.balanceOf({
                account: bob.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(bobInitialBlance).add(
                distributionAmount.div(subscriptionSupply).mul('2')
            ),
            expecationDiffLimit
        )

        await expect(
            await daix.balanceOf({
                account: spreader.address,
                providerOrSigner: admin
            })
        ).to.closeTo(ethers.BigNumber.from("0"), expecationDiffLimit)
    })


    it("Distribution with [ 1 unit issued to single account ] and [ 100 spreaderTokens ] - loseShare", async function () {
        let distributionAmount = ethers.utils.parseEther("100")

        const shareDistributionAmount = distributionAmount.div(subscriptionSupply)

        // ACTIONS

        // Bob deletes one of his two units
        await spreader.connect(bob).transfer(admin.address, 1 * decimals)

        // Admin gives spreader 100 DAIx
        await daix
            .transfer({
                receiver: spreader.address,
                amount: distributionAmount
            })
            .exec(admin)

        // (snapshot balances)
        let aliceInitialBlance = await daix.balanceOf({
            account: alice.address,
            providerOrSigner: admin
        })
        let bobInitialBlance = await daix.balanceOf({
            account: bob.address,
            providerOrSigner: admin
        })

        // Distribution executed
        await expect(spreader.connect(admin).distribute()).to.be.not.reverted

        // EXPECTATIONS

        // expect bob to have 1 distribution unit
        let bobSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0", // recall this was `INDEX_ID` in TokenSpreader.sol
            subscriber: bob.address,
            providerOrSigner: bob
        })

        await expect(bobSubscription.units).to.equal((1 * decimals).toString())

        await expect(
            await daix.balanceOf({
                account: alice.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(aliceInitialBlance).add(shareDistributionAmount),
            expecationDiffLimit
        )

        await expect(
            await daix.balanceOf({
                account: bob.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(bobInitialBlance).add(shareDistributionAmount), // expect original balance + distribution amount
            expecationDiffLimit
        )

        // expect balance of spreader contract to be zeroed out
        await expect(
            await daix.balanceOf({
                account: spreader.address,
                providerOrSigner: admin
            })
        ).to.closeTo(ethers.BigNumber.from("0"), expecationDiffLimit)
    })

    it("Distribution with [ no units outstanding ] and [ 100 spreaderTokens ] - loseShare", async function () {
        let distributionAmount = ethers.utils.parseEther("100")

        const shareDistributionAmount = distributionAmount.div(subscriptionSupply)

        // Bob deletes his last unit
        await spreader.connect(bob).transfer(admin.address, 1 * decimals)

        // Admin gives spreader 100 DAIx
        await daix
            .transfer({
                receiver: spreader.address,
                amount: distributionAmount
            })
            .exec(admin)

        // (snapshot balances)
        let aliceInitialBlance = await daix.balanceOf({
            account: alice.address,
            providerOrSigner: admin
        })
        let bobInitialBlance = await daix.balanceOf({
            account: bob.address,
            providerOrSigner: admin
        })

        await expect(spreader.connect(admin).distribute()).to.be.not.reverted

        // EXPECTATIONS

        let bobSubscription = await daix.getSubscription({
            publisher: spreader.address,
            indexId: "0",
            subscriber: bob.address,
            providerOrSigner: bob
        })

        await expect(bobSubscription.units).to.equal("0")

        await expect(
            await daix.balanceOf({
                account: alice.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(aliceInitialBlance).add(shareDistributionAmount),
            expecationDiffLimit
        )

        await expect(
            await daix.balanceOf({
                account: bob.address,
                providerOrSigner: admin
            })
        ).to.closeTo(
            ethers.BigNumber.from(bobInitialBlance),
            expecationDiffLimit
        )

        // expect balance of spreader contract to be zeroed out
        await expect(
            await daix.balanceOf({
                account: spreader.address,
                providerOrSigner: admin
            })
        ).to.closeTo(ethers.BigNumber.from("0"), expecationDiffLimit)
    })
})