const hre = require("hardhat");

async function main() {
    // contractFlashRaw = await ethers.deployContract("your contract name",signer=deployer);
    
    // await contractFlashRaw.waitForDeployment();
    // console.log(contractFlashRaw.target);
    
    const FlashLoan = await hre.ethers.getContractFactory('FlashLoan');
    console.log("Deploying contract...")

    const flashloan = await FlashLoan.deploy('0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A');

    await flashloan.waitForDeployment();
    console.log(`Flash Loan Contract deployed at: ${flashloan.target}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})