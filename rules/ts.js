module.exports = {
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
    },
  ],
  "@typescript-eslint/ban-types": [
    "error",
    {
      types: {
        String: {
          message: "Use `string` instead.",
          fixWith: "string",
        },
        Number: {
          message: "Use `number` instead.",
          fixWith: "number",
        },
        Boolean: {
          message: "Use `boolean` instead.",
          fixWith: "boolean",
        },
        Symbol: {
          message: "Use `symbol` instead.",
          fixWith: "symbol",
        },
        Object: {
          message: "Use `object` instead.",
          fixWith: "object",
        },
        object: "Use `{}` instead.",
        Function: "Use a specific function type instead, like `() => void`.",
        Omit:
          "Prefer the `Except` type in the `type-fest` package instead as it's stricter.",
      },
    },
  ],
  camelcase: "off",
  // This rule is too weird and does not make use of the type system.
  // Generally you should follow the following rules:
  // Classes, Types, Interfaces, React Components all should use PascalCase.
  // SQL properties use snake_case, and we do not automatically convert them on the JS end.
  // Constants should use UPPER_CASE, however this doesn't mean all variables defined with `const`,
  // this should be restricts to things that are really constants like error codes.
  // All other variables should use camelCase.
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/no-misused-new": "error",
  "no-empty-function": "off",
  "no-extra-parens": "off",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
};
