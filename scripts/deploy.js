const hre = require("hardhat");

async function main() {
  [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const LocusGoup = await ethers.getContractFactory("LocusGoupNFT", deployer);
  const LocusGoupNFT = await LocusGoup.deploy();

  await LocusGoupNFT.deployed();

  console.log("Contract address:", LocusGoupNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
