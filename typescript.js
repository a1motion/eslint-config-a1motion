const path = require("path");

const prettierConfig = Number(
  require(path.join(path.dirname(require.resolve("eslint-config-prettier")), "package.json")).version.split(".")[0]
);

module.exports = {
  extends: ["prettier", prettierConfig < 8 && "prettier/@typescript-eslint"].filter(Boolean),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: "tsconfig.json",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    ...require("./rules/base"),
    ...require("./rules/ts"),
  },
};
