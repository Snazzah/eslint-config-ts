module.exports = {
  env: {
    es2021: true,
    node: true
  },
  plugins: ['prettier', '@typescript-eslint', 'unused-imports', 'simple-import-sort', 'import'],
  rules: {
    'linebreak-style': ['warn', 'unix'],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 150,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'none'
      }
    ]
  },
  overrides: [
    {
      extends: ['plugin:json/recommended'],
      files: ['*.json'],
      plugins: ['json'],
      rules: {
        'json/*': ['error', 'allowComments'],
        'prettier/prettier': ['warn', { parser: 'json' }]
      }
    },
    {
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        project: './tsconfig.json',
        sourceType: 'module'
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'no-async-promise-executor': 0,
        'prettier/prettier': 'warn',
        'no-cond-assign': [2, 'except-parens'],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'no-empty': [
          'error',
          {
            allowEmptyCatch: true
          }
        ],
        'prefer-const': [
          'warn',
          {
            destructuring: 'all'
          }
        ],
        'spaced-comment': 'warn',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn'
      }
    },
    {
      files: ['*.d.ts'],
      rules: { 'spaced-comment': 0 }
    },
    {
      files: ['rollup.config.js'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ]
};
