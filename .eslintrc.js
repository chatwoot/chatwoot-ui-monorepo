module.exports = {
  extends: ['airbnb-base/legacy', 'plugin:vue/recommended', 'prettier'],
  plugins: ['prettier', '@stylistic/js'],
  ignorePatterns: ['**/*/dist/**/*', '**/*/node_modules/'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2024,
  },
  rules: {
    'prettier/prettier': ['error'],
    camelcase: 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'vue/html-indent': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 20,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-v-html': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'import/extensions': ['off'],
    'no-console': 'error',
    'comma-dangle': ['error', 'only-multiline'],
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
