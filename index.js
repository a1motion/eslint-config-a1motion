module.exports = {
  extends: ["prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  settings: {},
  plugins: ["prettier"],
  rules: {
    ...require("./rules/base"),
  },
};
