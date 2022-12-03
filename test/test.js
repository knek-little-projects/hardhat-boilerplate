const { ethers } = require("hardhat")

it("My test", async function () {
    const [signer] = await ethers.getSigners()
    console.log("Signer address", signer.address)
})