const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Marketplace", async () => {
    it("Should deploy Marketplace and register order", async function () {

        const Marketplace = await ethers.getContractFactory(
            "Marketplace"
        )

        const marketplace = await Marketplace.deploy()

        await marketplace.registerOrder(
            "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2",
            12,
            12
        )
    })
})