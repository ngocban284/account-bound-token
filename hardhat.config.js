require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@openzeppelin/hardhat-upgrades");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} = require("hardhat/builtin-tasks/task-names");
const path = require("path");

subtask(
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
  async (_, { config }, runSuper) => {
    const paths = await runSuper();

    return paths.filter((solidityFilePath) => {
      const relativePath = path.relative(
        config.paths.sources,
        solidityFilePath
      );

      const excludeArr = "testing-zone/";

      return !relativePath.includes(excludeArr);
    });
  }
);

// let ADMIN_KEY = process.env.ADMIN + "";
// let OWNERNFT_KEY = process.env.OWNERNFT + "";
// let USER1_KEY = process.env.USER1 + "";
// let USER2_KEY = process.env.USER2 + "";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 420,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      timeout: 2000000,
      chainId: 97,
      accounts: [],
      blockGasLimit: 1e7,
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [""],
    },
  },
};
