require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const MAINNET_API_KEY = process.env.RINKEBY_API_KEY;
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: "0.7.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${MAINNET_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
     }
   },
    etherscan: {
      apiKey: `${ETHERSCAN_API_KEY}`
  }
};
