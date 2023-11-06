module.exports = {
  extends: [
    'airbnb-base/legacy',
    'plugin:vue/recommended',
    'prettier',
  ],
  plugins: ['prettier', '@stylistic/js'],
  ignorePatterns: ['**/*/dist/**/*'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2024,
  },
  rules: {
    "comma-dangle": ["error", 'only-multiline'],
    camelcase: 'off',
    'no-param-reassign': 'off',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    bus: true,
  },
};
