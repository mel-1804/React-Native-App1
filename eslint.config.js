// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettier = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Prettier como regla de ESLint
      'prettier/prettier': 'warn',
    },
  },
]);
