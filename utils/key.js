const { ethers } = require("hardhat");

async function generatePrivateKey() {
    const randomBytes = await ethers.utils.randomBytes(32);
    const privateKey = ethers.utils.hexZeroPad(randomBytes, 32);
    return privateKey;
}

async function getPublicKey(privateKey) {
    const wallet = new ethers.Wallet(privateKey);
    return wallet.getAddress();
}

module.exports = { getPublicKey, generatePrivateKey };