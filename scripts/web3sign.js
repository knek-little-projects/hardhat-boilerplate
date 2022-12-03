const { ethers, web3 } = require("hardhat");
const key = require("../utils/key")

async function main() {
    const msg = "Hello"
    const priv = ethers.utils.formatBytes32String("somePrivateKey");
    const hash = ethers.utils.solidityKeccak256(["string"], [msg]);
    const signature = web3.eth.accounts.sign(hash, priv);
    console.log("PRIVKEY", priv)
    console.log("PUBKEY", await key.getPublicKey(priv))
    console.log("HASH", hash)
    console.log("MSG", msg)
    console.log("SIGN", signature)
    console.log("RECOVER", web3.eth.accounts.recover(hash, signature.signature))
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(-1)
    })
