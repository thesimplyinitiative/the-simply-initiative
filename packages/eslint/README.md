# @tsi/eslint-plugin

Eslint Config used within The Simply Initiative

## Installation

**Step 1**

_If you are in an NX workspace, you can normally skip this step_

Install the required packages for [ESLint](https://eslint.io/), [Typescript](https://typescriptlang.org/)

```sh
yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**Step 2**

Install this plugin

```sh
yarn add -D @tsi/eslint-plugin
```

## Usage

In your `eslint` config file merge the following config:

```js
// .eslint_old.js
module.exports = {
  extends: ['plugin:@tsi/config'],
  plugins: ['@tsi'],

  // ... other config ...
};
```

This library was generated with [Nx](https://nx.dev).
