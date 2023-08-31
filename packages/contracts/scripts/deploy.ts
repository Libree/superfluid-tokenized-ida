import { ethers } from "hardhat";


async function main() {

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const marketplace = await Marketplace.deploy();

    await marketplace.deployed();

    console.log("marketplace deployed to:", marketplace.address);

    
    // const SubscriptionManager = await ethers.getContractFactory("SubscriptionManager");
    // const subscriptionManager = await SubscriptionManager.deploy();

    // await subscriptionManager.deployed();

    // console.log("SubscriptionManager deployed to:", subscriptionManager.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});