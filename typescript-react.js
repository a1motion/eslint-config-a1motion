const base = require("./typescript");

const react = {
  ...base,
  extends: [...base.extends, "plugin:react/recommended", "prettier/react"],
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

react.rules["@typescript-eslint/naming-convention"].push({
  selector: "function",
  format: ["camelCase", "PascalCase"],
});

module.exports = react;
