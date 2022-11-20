const { ethers, upgrades } = require("hardhat");

async function main() {
  let SBT = await ethers.getContractFactory("SBT");

  let sbt = await upgrades.deployProxy(SBT, [
    "Trava Account Token",
    "TAT",
    "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
  ]);

  await sbt.deployed();
  console.log("Trava Account Token deployed to:", sbt.address);
}

main();
