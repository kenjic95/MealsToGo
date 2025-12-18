const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  ...compat.extends("@react-native/eslint-config"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "ft-flow/define-flow-type": "off",
      "ft-flow/use-flow-type": "off",
      "react-native/no-inline-styles": "off",
    },
  },
];
