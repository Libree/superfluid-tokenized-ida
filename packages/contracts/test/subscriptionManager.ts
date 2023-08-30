const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Manager", async () => {
    it("Should deploy manager and create subscription", async function () {

        const SubscriptionManager = await ethers.getContractFactory(
            "SubscriptionManager"
        )

        const manager = await SubscriptionManager.deploy()

        await manager.createSubscription(
            "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2",
            12,
            "asd",
            "asd",
            1111,
            "bafybeierczmiycnqwwgqpfpjlikol6lyismaoojhtqtvqahljvdbbyfmly"
        )
    })
})