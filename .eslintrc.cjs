const { builtinModules } = require('module');

const nodeBuiltinModules = builtinModules.join('|');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'import/no-default-export': 'error',
    'no-nested-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-use-before-define': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'newline-before-return': 'error',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          /* import 'foo*' or import '@foo*' */
          [`^\\u0000@?\\w`],
          /* import ... from 'fs' */
          [`^(${nodeBuiltinModules})`],
          /* import ... from 'foo*' or import ... from '@foo*' */
          [`^@?\\w`],
          /* import ... from './foo*' or import ... from '../foo*' */
          ['^\\.'],
          /* import './foo*' or import '../foo*' */
          ['^\\u0000\\.'],
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
  },
};
