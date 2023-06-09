require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerly: {
      url: process.env.INFURA_URL_GOERLY,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.INFURA_URL_SEPOLYA,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.POLYGON_RPC_MAINET,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  etherscan: {
    apiKey: process.env.MATIC_API_KEY,
  },
};
