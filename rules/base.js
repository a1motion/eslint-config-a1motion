module.exports = {
  // Possible Errors
  "for-direction": "error",
  "getter-return": "error",
  "no-await-in-loop": "off",
  "no-compare-neg-zero": "error",
  "no-cond-assign": ["error", "always"],
  "no-console": "off",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-debugger": "off",
  "no-dupe-args": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty": ["warn", { allowEmptyCatch: true }],
  "no-empty-character-class": "error",
  "no-ex-assign": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-parens": "off",
  "no-extra-semi": "error",
  "no-func-assign": "error",
  "no-invalid-regexp": "error",
  "no-irregular-whitespace": "error",
  "no-misleading-character-class": "error",
  "no-obj-calls": "error",
  "no-prototype-builtins": "error",
  "no-regex-spaces": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "warn",
  "no-unexpected-multiline": "error",
  "no-unreachable": "warn", // allows for disabling code
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "require-atomic-updates": "off",
  "use-isnan": "error",
  "valid-typeof": "error",
  // Best Practices
  "accessor-pairs": "off",
  "array-callback-return": "error",
  "block-scoped-var": "error",
  "class-methods-use-this": "off",
  complexity: 0,
  "consistent-return": "error",
  curly: ["error", "all"],
  "default-case": "warn",
  "dot-location": ["error", "property"],
  "dot-notation": "error",
  eqeqeq: ["error", "always"],
  "guard-for-in": "error",
  "max-classes-per-file": "off",
  "no-alert": "error",
  "no-caller": "warn",
  "no-case-declarations": "error",
  "no-div-regex": "error",
  "no-else-return": ["error", { allowElseIf: false }],
  "no-empty-function": "warn",
  "no-empty-pattern": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-fallthrough": "error",
  "no-floating-decimal": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": "off",
  "no-implied-eval": "error",
  "no-invalid-this": "off",
  "no-iterator": "error",
  "no-lone-blocks": "error",
  "no-multi-spaces": "error",
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-require": "error",
  "no-new-wrappers": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": "off",
  "no-proto": "error",
  "no-path-concat": "error",
  "no-redeclare": "error",
  "no-restricted-properties": "error",
  "no-return-assign": "error",
  "max-len": "off",
  "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  quotes: [
    "error",
    "double",
    {
      avoidEscape: true,
    },
  ],
  "func-call-spacing": ["error", "never"],
  "func-names": ["error", "as-needed"],
  "comma-spacing": [
    "error",
    {
      after: true,
    },
  ],
  "quote-props": ["error", "as-needed"],
  "prefer-const": "error",
  "prefer-spread": "error",
  "prefer-rest-params": "error",
  "prefer-arrow-callback": "error",
  "prefer-destructuring": [
    "error",
    {
      // https://github.com/xojs/eslint-config-xo/blob/06e4e1416bdbf2df56984adca8039683ebad735c/esnext.js#L28
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
  ],
  "no-var": "error",
  "no-this-before-super": "error",
  "object-shorthand": "error",
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true,
      argsIgnorePattern: /^_/.source,
      caughtErrors: "all",
      caughtErrorsIgnorePattern: /^_/.source,
    },
  ],
  "prettier/prettier": [
    "error",
    {
      trailingComma: "es5",
      printWidth: 120,
      semi: true,
      jsxBracketSameLine: true,
      arrowParens: "always",
      endOfLine: "lf",
      singleQuote: false,
    },
  ],
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "*",
      next: ["export", "cjs-export"],
    },
    {
      blankLine: "never",
      prev: ["export", "cjs-export"],
      next: ["export", "cjs-export"],
    },
    {
      blankLine: "always",
      prev: ["import", "cjs-import"],
      next: "*",
    },
    {
      blankLine: "never",
      prev: ["import", "cjs-import"],
      next: ["import", "cjs-import"],
    },
    {
      blankLine: "always",
      prev: "multiline-block-like",
      next: "*",
    },
  ],
  // "sort-imports": ["error"],
};
