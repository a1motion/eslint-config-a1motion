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
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      createClass: `createReactClass`,
      pragma: `React`,
      version: `detect`,
    }
  },
  plugins: [
    `prettier`
  ],
  rules: {
    // Possible Errors
    "for-direction": 2,
    "getter-return": 2,
    "no-await-in-loop": 0,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, `always`],
    "no-console": 0,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": [1, { allowEmptyCatch: true }],
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-misleading-character-class": 2,
    "no-obj-calls": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 1,
    "no-unexpected-multiline": 2,
    "no-unreachable": 1, // allows for disabling code
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "require-atomic-updates": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    // Best Practices
    "accessor-pairs": 0,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "class-methods-use-this": 0,
    complexity: 0,
    "consistent-return": 2,
    curly: [2, `all`],
    "default-case": 1,
    "dot-location": [2, `property`],
    "dot-notation": 2,
    eqeqeq: [2, `always`],
    "guard-for-in": 2,
    "max-classes-per-file": 0,
    "no-alert": 2,
    "no-caller": 1,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": [2, { allowElseIf: false }],
    "no-empty-function": 1,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 0,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-restricted-properties": 2,
    "no-return-assign": 2,
    "max-len": 0,
    "no-restricted-syntax": [
      2,
      `ForInStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    quotes: [
      2,
      `backtick`,
      {
        allowTemplateLiterals: true,
      },
    ],
    "func-call-spacing": [2, `never`],
    "func-names": [2, `as-needed`],
    "comma-spacing": [
      2,
      {
        after: true,
      },
    ],
    "quote-props": [2, `as-needed`],
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-rest-params": 2,
    "prefer-arrow-callback": 2,
    "prefer-destructuring": 2,
    "no-var": 2,
    "no-this-before-super": 2,
    "object-shorthand": 2,
    "react/prop-types": 0,
    "react/display-name": 0,
    "no-unused-vars": 1,
    "prettier/prettier": [
      `error`,
      {
        trailingComma: `es5`,
        printWidth: 80,
        semi: false,
        jsxBracketSameLine: true,
        arrowParens: true,
        endOfLine: 'lf',
      },
    ],
  },
}
