module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: true,
      },
    ],
    'require-jsdoc': 'off',
    'max-len': ['error', { code: 80, comments: 65, tabWidth: 2 }],
  },
};
