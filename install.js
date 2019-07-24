#!/usr/bin/env node
const { execSync } = require(`child_process`);

execSync(
  `yarn add --dev eslint-formatter-pretty -W && npx install-peerdeps --dev --yarn -x "-W" eslint-config-a1motion`
);

if (process.argv.includes(`typescript`)) {
  execSync(
    `yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser`
  );
}
