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
      forking: {
        url: "https://hardcore-mayer:untrue-puppet-yearly-early-widow-spud@nd-723-346-173.p2pify.com",
      },
      chainId: 97,
      accounts: [
        {
          privateKey:
            "0xa0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6",
          balance: "100000000000000000000000000000",
        },
        {
          privateKey:
            "0x36f1ea3519a6949576c242d927dd0c74650554cdfaedbcd03fb3a80c558c03de",
          balance: "100000000000000000000000000000",
        },
        {
          privateKey:
            "0x850da640e20869c7760ad91c41f7d8e5964403119a0a0f5fdd7a3340b701878e",
          balance: "100000000000000000000000000000",
        },
        {
          privateKey:
            "0xee2872a87e48507961714c06d9929e125379e5eda406824e671952257d5e9cd9",
          balance: "100000000000000000000000000000",
        },
      ],
      blockGasLimit: 1e7,
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [
        "0xa0c31ec3759513cbdcb60bd0d3f30d298bcede28c06c5dd3b77b2b8219158de6",
      ],
    },
  },
};
