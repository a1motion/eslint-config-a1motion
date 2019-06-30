const base = require(`./base`);

base.extends = base.extends.concat([
  `plugin:react/recommended`,
  `prettier/react`,
]);

base.plugins = base.plugins.concat([`react`]);

base.rules = {
  ...base.rules,
  ...require(`./rules/react`),
  ...require(`./rules/jsx`),
};

module.exports = base;
