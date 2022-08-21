const { ethers } = require("hardhat");

async function main() {
  [signer] = await ethers.getSigners()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
