module.exports = {
  "@typescript-eslint/array-type": [`error`, `array-simple`],
  "@typescript-eslint/ban-types": [
    `error`,
    {
      types: {
        String: {
          message: `Use \`string\` instead.`,
          fixWith: `string`,
        },
        Number: {
          message: `Use \`number\` instead.`,
          fixWith: `number`,
        },
        Boolean: {
          message: `Use \`boolean\` instead.`,
          fixWith: `boolean`,
        },
        Symbol: {
          message: `Use \`symbol\` instead.`,
          fixWith: `symbol`,
        },
        Object: {
          message: `Use \`object\` instead.`,
          fixWith: `object`,
        },
        object: `Use \`{}\` instead.`,
        Function: `Use a specific function type instead, like \`() => void\`.`,
        Omit: `Prefer the \`Except\` type in the \`type-fest\` package instead as it's stricter.`,
      },
    },
  ],
  "@typescript-eslint/explicit-function-return-type": [
    `error`,
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    },
  ],
  indent: `off`,
  "@typescript-eslint/indent": [`error`, 2],
  "no-empty-function": `off`,
  "@typescript-eslint/no-empty-function": `error`,
  "no-extra-parens": `off`,
  "no-unused-vars": `off`,
  "@typescript-eslint/no-unused-vars": [
    `error`,
    {
      vars: `all`,
      args: `after-used`,
      ignoreRestSiblings: true,
      argsIgnorePattern: `^_$`,
      caughtErrors: `all`,
      caughtErrorsIgnorePattern: `^_$`,
    },
  ],
};
