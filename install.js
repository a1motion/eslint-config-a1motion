#!/usr/bin/env node
const { execSync } = require("child_process");

const packagesToInstall = [
  "@babel/eslint-parser",
  "@babel/core",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  "prettier",
  "eslint-formatter-pretty",
];

if (process.argv.includes("typescript")) {
  packagesToInstall.push("@typescript-eslint/eslint-plugin", "@typescript-eslint/parser");
}

if (process.argv.includes("react")) {
  packagesToInstall.push("eslint-plugin-react");
}

console.log(`eslint-config-a1motion: Installing packages: ${packagesToInstall.map((a) => `'${a}'`).join(", ")}`);

execSync(`yarn add --dev -W ${packagesToInstall.map((pkg) => `${pkg}`).join(" ")}`, {
  stdio: "inherit",
});
