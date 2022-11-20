// // scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
  let TAT = await ethers.getContractFactory("TAT");

  let tat = await upgrades.deployProxy(TAT, [
    "Trava Account Token",
    "TAT",
    "0x595622cBd0Fc4727DF476a1172AdA30A9dDf8F43",
  ]);

  await tat.deployed();
  console.log("Trava Account Token deployed to:", tat.address);
}

main();
