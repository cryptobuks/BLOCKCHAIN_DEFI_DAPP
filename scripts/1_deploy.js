const { ethers } = require("hardhat");

async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token") // ethers is the library that helps us connect blockchain using hardhat
  // getContractFactory gets information from artifacts/contracts/token.json

  // Deploy Contract
  const token =  await Token.deploy()
  await token.deployed()
  console.log(`Token deployed to: ${token.address}`)
}

// Pattern to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
