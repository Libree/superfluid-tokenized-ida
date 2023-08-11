import { ethers } from "hardhat";


async function main() {
    const subAddress = '0xfbb1afd8d7e2eec1edf4c7e261a1e2d9bb0c8e8c' 

    const tokenizedIDA = await ethers.getContractAt('TokenizedIDA', subAddress)
    await tokenizedIDA.distribute()

    console.log("Superfluid tokens distributed", tokenizedIDA.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});