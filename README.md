Hardhat boilerplate
===================


Installation
------------

```
npm install
```

Configuration
-------------

You can set env variables in `.env` file to connect to mainnet/testnet &mdash; see `hardhat.config.js`.

For example, add this to `.env` file to connect to Goerli network:
```
GOERLI_PRIVATE_KEY=XXX_YOUR_PRIVATE_KEY
GOERLI_URL=XXX_INFURA_URL
```

In this example you can use `npx hardhat console --network goerli` to run a console which will operate on Goerli.


Notes
-----

Use https://www.npmjs.com/package/hardhat-tracer to see events, calls and storage operations when running your tests