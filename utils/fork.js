const { ethers } = require("hardhat");

async function gotoBlock(blockNumber, jsonRpcUrl) {
    await ethers.provider.send(
        "hardhat_reset",
        [
            {
                forking: {
                    jsonRpcUrl,
                    blockNumber,
                }
            }
        ]
    )
}

module.exports = {
    gotoBlock,
}