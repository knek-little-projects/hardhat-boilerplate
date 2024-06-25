const { ethers } = require("hardhat");

async function setBalance(token, mappingSlot, address, value) {
    const balanceSlot = ethers.utils.solidityKeccak256(
        ["uint256", "uint256"],
        [address, mappingSlot]
    )

    await ethers.provider.send(
        "hardhat_setStorageAt",
        [
            token.address,
            balanceSlot,
            ethers.utils.hexlify(ethers.utils.zeroPad(value, 32))
        ]
    )
}

function getSlot(userAddress, mappingSlot) {
    return ethers.utils.solidityKeccak256(
        ["uint256", "uint256"],
        [userAddress, mappingSlot]
    )
}

async function checkSlot(erc20, mappingSlot) {
    const contractAddress = erc20.address
    const userAddress = ethers.constants.AddressZero

    // slot must be a hex string stripped of leading zeros! no padding!
    // https://ethereum.stackexchange.com/questions/129645/not-able-to-set-storage-slot-on-hardhat-network
    const balanceSlot = getSlot(userAddress, mappingSlot)

    // storage value must be a 32 bytes long padded with leading zeros hex string
    const value = 0xDEADBEEF
    const storageValue = ethers.utils.hexlify(ethers.utils.zeroPad(value, 32))

    await ethers.provider.send(
        "hardhat_setStorageAt",
        [
            contractAddress,
            balanceSlot,
            storageValue
        ]
    )
    return await erc20.balanceOf(userAddress) == value
}

async function findBalanceSlot(erc20) {
    const snapshot = await network.provider.send("evm_snapshot")
    for (let slotNumber = 0; slotNumber < 100; slotNumber++) {
        try {
            if (await checkSlot(erc20, slotNumber)) {
                await ethers.provider.send("evm_revert", [snapshot])
                return slotNumber
            }
        } catch { }
        await ethers.provider.send("evm_revert", [snapshot])
    }
}

module.exports = {
    setBalance,
    findBalanceSlot,
}