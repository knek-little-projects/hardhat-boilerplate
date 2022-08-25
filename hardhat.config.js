require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const DEFAULT_COMPILER = process.env.DEFAULT_COMPILER || "0.8.7"
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY
const RINKBEY_PRIVATE_KEY = process.env.RINKBEY_PRIVATE_KEY
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const INFURA_API_KEY = process.env.INFURA_API_KEY
const MOONRIVER_PRIVATE_KEY = process.env.MOONRIVER_PRIVATE_KEY

const GOERLI_URL = process.env.GOERLI_URL || `https://goerli.infura.io/v3/${INFURA_API_KEY}`
const ROPSTEN_URL = process.env.ROPSTEN_URL || `https://ropsten.infura.io/v3/${INFURA_API_KEY}`
const KVOAN_URL = process.env.KVOAN_URL || `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
const RINKBEY_URL = process.env.RINKBEY_URL || `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
const MOONRIVER_URL = process.env.MOONRIVER_URL || `https://rpc.moonriver.moonbeam.network/`

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

if (GOERLI_PRIVATE_KEY) {
  module.exports.networks.goerli = {
    url: GOERLI_URL,
    accounts: [
      GOERLI_PRIVATE_KEY
    ]
  }
}

if (ROPSTEN_PRIVATE_KEY) {
  module.exports.networks.ropsten = {
    url: ROPSTEN_URL,
    accounts: [
      ROPSTEN_PRIVATE_KEY
    ]
  }
}

if (MOONRIVER_PRIVATE_KEY) {
  module.exports.networks.moonriver = {
    url: MOONRIVER_URL,
    accounts: [
      MOONRIVER_PRIVATE_KEY
    ]
  }
}

if (RINKBEY_PRIVATE_KEY) {
  module.exports.networks.rinkbey = {
    url: RINKBEY_URL,
    accounts: [
      RINKBEY_PRIVATE_KEY
    ]
  }
}
