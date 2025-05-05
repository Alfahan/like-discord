module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error', // valid
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] // best practice
  },
  env: {
    node: true,
    es2021: true
  }
};
