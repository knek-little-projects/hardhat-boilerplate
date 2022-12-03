const { ethers } = require("hardhat");

// Signing a hash with a given private key
async function signHash(hash, privateKey) {
    // Create an ethers.js wallet using the given private key
    const wallet = new ethers.Wallet(privateKey);

    // Sign the hash with the wallet
    const signature = await wallet.signMessage(hash);

    // Return the signature
    return signature;
}

module.exports = { signHash }