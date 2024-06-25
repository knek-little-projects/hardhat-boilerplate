require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require("@nomiclabs/hardhat-web3");

const DEFAULT_COMPILER = process.env.DEFAULT_COMPILER || "0.8.7"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: DEFAULT_COMPILER
      },
    ]
  },
  defaultNetwork: "hardhat",
  networks: {}
}
