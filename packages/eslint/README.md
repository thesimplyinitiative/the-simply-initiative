# @tsi/eslint-plugin

Base NX Eslint Config used within The Simply Initiative, also includes rules from `react-magnetic-di`;

## Installation

**Step 1**

_If you are in an NX workspace, you can normally skip this step_

Install the required packages for [ESLint](https://eslint.io/), [Typescript](https://typescriptlang.org/) and [Nx](https://nx.dev/):

```sh
yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @nrwl/devkit
```

**Step 2**

Install this plugin

```sh
yarn add -D @tsi/eslint-plugin
```

## Usage

In your `eslint` config file merge the following config:

```js
// .eslint.js
module.exports = {
  extends: ['plugin:@tsi/nx'],
  plugins: ['@tsi'],

  // ... other config ...
};
```

This library was generated with [Nx](https://nx.dev).
