Hardhat boilerplate
===================


Installation
------------

```sh
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


Tracer
------

Use https://www.npmjs.com/package/hardhat-tracer to see events, calls and storage operations when running your tests

Install
```sh
npm i hardhat-tracer
```

Add to `hardhat.config.js`
```js
require("hardhat-tracer");
```

Use
```sh
npx hardhat test --trace      # shows logs + calls
npx hardhat test --fulltrace  # shows logs + calls + sloads + sstores
```