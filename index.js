module.exports = {
  extends: [`prettier`],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  settings: {},
  plugins: [`prettier`],
  rules: {
    ...require(`./rules/base`),
  },
};
