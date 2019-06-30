#!/usr/bin/env node
const { execSync } = require(`child_process`);

execSync(
  `yarn add --dev eslint-formatter-pretty -W && npx install-peerdeps --dev --yarn -x "-W" eslint-config-a1motion`
);
