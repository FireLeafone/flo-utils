// 参考 https://github.com/umijs/fabric/blob/master/src/softyEslint.ts
module.exports = {
  parser: 'babel-eslint', // 定义ESLint的解析器
  extends: ['airbnb-base', 'prettier'],
  plugins: ['eslint-comments', 'unicorn', 'import'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {},
  rules: {
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    semi: ['error', 'always'],
    'prefer-const': 2,
    'prefer-destructuring': 0,
    'spaced-comment': 2,
    'key-spacing': 2,
    camelcase: 2,
    'comma-spacing': 2,
    'global-require': 2,
    'no-console': 0,
    'func-call-spacing': ['error', 'never'],
    'block-spacing': 2,
    'space-before-function-paren': 2,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,

    'eslint-comments/no-unlimited-disable': 0,

    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js'] },
    },
  },
};
