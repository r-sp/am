/** @type {import('eslint').Linter.Config} */

const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'only-warn'],
  extends: ['eslint:recommended', 'turbo', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    projectService: true,
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
};

module.exports = config;
