// https://eth-ropsten.alchemyapi.io/v2/jni1gVc_3kxJQSac_imRGAIK3em4QuqJ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/jni1gVc_3kxJQSac_imRGAIK3em4QuqJ',
      accounts: ['9d182a154ec3a1e77285974cc7adef408dfdd1dd2e72316a846d7d2eb67a3771'],
    },
  },
};
