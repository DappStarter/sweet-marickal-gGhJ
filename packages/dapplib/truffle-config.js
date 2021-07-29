require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strategy radar situate cluster hidden arena army gesture'; 
let testAccounts = [
"0x0801e5c586396b9ffa5d80e6726bcd46ca8efd55f90bf6d04b9eef387c39593c",
"0x7187efa416499ac788f3c58cf006cbee5a7aad8695152a1b6237e6aabf2dfb6b",
"0x6a0a54bdeb0c49cfdb50e56367f5dd65e229c87fc970f0a1000c3fdb86cf1473",
"0x2c13ee159037da62e6cbebd2394b55c29073134be70b3773db778454a5ef2573",
"0xcf228aa71cfe1bf615e10a14f2795191bc051d779ac95fb0644c7771a0a9b417",
"0x4f81cf1283293affd00efff4417946b2e2e6f304931fccccc5ad2ab325575291",
"0xb862e88acf2c8a69b55ec354c59176e384dc3e9d72c4e5e2c666aabd379b1d4b",
"0x1b9191bf77ebaf1cbdcd572df1d859f878e914bb9498bb6095b2953fc5a44ef1",
"0x66b8bdbedb9316641000ff0ca706c5d099f6f2b32ebb7a10fa3755445a831ba7",
"0x6e4b8fbf9173c56f3691d41afe0d57c1981881946173d9559cf741959302fb02"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

