module.exports = {
  env: {
    browser: true,
  },
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/order': ['error', {
      groups: [
        ['builtin', 'external'],
        'internal',
      ],
      pathGroups: [
        {
          pattern: 'src/*',
          group: 'internal',
          position: 'after',
        },
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'off',
    'no-bitwise': 'off',
    'no-console': 'warn',
    'no-restricted-imports': ['error', {
      patterns: [{
        group: ['./*', '../*'],
        message: 'Relative imports are not allowed, please use absolute imports.',
      }],
    }],
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', { functions: false }],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 'off',
  },
};
