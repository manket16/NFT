/**

* @type import('hardhat/config').HardhatUserConfig

*/

require('dotenv').config();

require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {

   solidity: "0.8.0",

   defaultNetwork: "ropsten",

   networks: {

      hardhat: {},

      ropsten: {

         url: process.env.STAGING_ALCHEMY_KEY,

         accounts: [`process.env.PRIVATE_KEY`]

      }

   },

}

