const { ethers } = require("hardhat");
const sign = require("../utils/sign.js")
const key = require("../utils/key.js")

// Usage example
async function main() {
    // Hash to sign
    const msg = "Hello"
    const hash = ethers.utils.solidityKeccak256(["string"], [msg]);

    // Private key
    const privateKey = await key.generatePrivateKey();
    const pubKey = await key.getPublicKey(privateKey)

    // Sign the hash
    const signature = await sign.signHash(hash, privateKey);

    console.log(`Message: ${msg}`)
    console.log(`Hash: ${hash}`)
    console.log(`Signature: ${signature}`);
    console.log(`Pub key: ${pubKey}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(-1)
    })