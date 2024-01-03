module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      'error',
      'always',
      ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'ci', 'test', 'revert', 'perf', 'vercel'],
    ],
  },
};
