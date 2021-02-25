const path = require("path");
const base = require("./index");

const prettierConfig = Number(
  require(path.join(path.dirname(require.resolve("eslint-config-prettier")), "package.json")).version.split(".")[0]
);

const react = {
  ...base,
  extends: [...base.extends, "plugin:react/recommended", prettierConfig < 8 && "prettier/react"].filter(Boolean),
  plugins: [...base.plugins, "react"],
  rules: {
    ...base.rules,
    ...require("./rules/react"),
    ...require("./rules/jsx"),
  },
  settings: {
    ...base.settings,
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
};

module.exports = react;
