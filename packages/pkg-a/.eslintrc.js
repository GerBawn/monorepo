module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 11,
  },
  env: {
    node: true,
    // es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
  ],
  plugins: [],
  globals: {
    // Promise: 'off',
  },
};
