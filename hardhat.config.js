require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const INFURA_API_KEY = process.env.INFURA_API_KEY
const MOONRIVER_PRIVATE_KEY = process.env.MOONRIVER_PRIVATE_KEY

const GOERLI_INFURA_URL = `https://goerli.infura.io/v3/${INFURA_API_KEY}`
const ROPSTEN_INFURA_URL = `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
const KVOAN_ALCHEMY_URL = `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
const RINKBEY_ALCHEMY_URL = "https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}"
const MOONRIVER_URL = "https://rpc.moonriver.moonbeam.network/"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7"
      }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_INFURA_URL,
      accounts: [
        GOERLI_PRIVATE_KEY
      ]
    },
    ropsten: {
      url: ROPSTEN_INFURA_URL,
      accounts: [
        ROPSTEN_PRIVATE_KEY
      ]
    },
    moonriver: {
      url: MOONRIVER_URL,
      accounts: [
        MOONRIVER_PRIVATE_KEY
      ]
    },
  }
};
