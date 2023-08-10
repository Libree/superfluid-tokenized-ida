import { ethers } from "hardhat";


async function main() {
    const spreaderToken = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f' //Super fDAI Fake Token
    const tokenName = 'Libree subscription'
    const tokenSymbol = 'LIBREESUB'
    const totalSupply = 100

    const TokenizedIDA = await ethers.getContractFactory("TokenizedIDA");
    const tokenizedIDA = await TokenizedIDA.deploy(
        spreaderToken,
        tokenName,
        tokenSymbol,
        totalSupply
    );

    await tokenizedIDA.deployed();

    console.log("Tokenized IDA deployed to:", tokenizedIDA.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});