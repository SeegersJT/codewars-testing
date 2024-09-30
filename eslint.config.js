import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      // Add your custom rules here
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      // Add more rules as needed
    },
  },
  pluginJs.configs.recommended,
];