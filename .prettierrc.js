module.exports = {
  ...require('@suemor/prettier'),
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-restricted-globals': ['error', 'close', 'open', 'name', 'event'],
  },
}
