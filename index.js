module.exports = {
  extends: [`eslint:recommended`, `plugin:react/recommended`, `prettier`],
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
  plugins: [`prettier`],
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  rules: {
    'max-len': 0,
    semi: [2, `never`],
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': [
      2,
      `ForInStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    'no-console': `off`,
    quotes: [
      2,
      `backtick`,
      {
        allowTemplateLiterals: true,
      },
    ],
    'func-call-spacing': [2, `never`],
    'func-names': [2, `as-needed`],
    'comma-spacing': [
      2,
      {
        after: true,
      },
    ],
    'quote-props': [2, `as-needed`],
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-rest-params': 2,
    'prefer-arrow-callback': 2,
    'prefer-destructuring': 2,
    'no-var': 2,
    'no-this-before-super': 2,
    'object-shorthand': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-unused-vars': 1,
    'prettier/prettier': [
      `error`,
      {
        trailingComma: `es5`,
        singleQuote: true,
        printWidth: 80,
        semit: false,
      },
    ],
  },
}
