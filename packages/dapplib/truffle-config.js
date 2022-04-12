require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pulse hunt industry sure stable'; 
let testAccounts = [
"0x5d598b30b6d4b3bd2fcdc8c792c930822b92569cf93987e9dfcab1003a8c7428",
"0x300d7ff7ae01aa85f1ed4f4d09acd14bf17bc8db6d712aae4b7a360062e1cd3d",
"0xc66886ddb18018810ea10b9a269c5b0c1ea493622340613c5020635ee146b98f",
"0xed53f2bce074ef026e195356b40a5a50b26526b58b6c515c3f49324976250d98",
"0x71d2430c20e46cef82f10c51f6923bdd7f2386c8e8f786c54c86e7b7eb0344b0",
"0x1de69eaa212d224a6387ae838cb30bca710f05800c9fe4e777fd12cb397c3a19",
"0xbf135b22366a410498ca280a64cde73b7968ca13a87bc2711994d1cf6c6387ab",
"0x0f25fdfa8fd594d216ed5a55835b69bc97d5ef10e2dd7b4c1d1b9ce4ea3b070a",
"0xf6e6daafe535a7a0975f0eb18808a24f56b88878e44250382bb8bbcb9c0e890b",
"0x4bd569c326361a78e33ff0e0b2ef079b7926e6ffb18a98faca37c386c0209c81"
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

