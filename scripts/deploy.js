const hre = require("hardhat");

async function main() {
  [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const LocusGroup = await ethers.getContractFactory("LocusGroupNFT", deployer);
  const LocusGroupNFT = await LocusGroup.deploy();

  await LocusGroupNFT.deployed();

  console.log("Contract address:", LocusGroupNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
