/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/shared-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
