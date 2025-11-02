module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier',
    'import',
    'boundaries',
  ],
  env: {
    'react-native/react-native': true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-module': {},
    },
  },
  rules: {
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Tailwind css total classes
    'no-restricted-syntax': [
      'warn',
      {
        selector:
          'JSXAttribute[name.name="className"][value.value=/(?:\\S+\\s+){3,}/]',
        message:
          'className has 3+ classes. Consider using clsx() or classname utilities.',
      },
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['^\\.\\.\\/\\.\\.\\/'], // any import with 2 or more ../
            message:
              'Use a path alias (e.g. @hooks, @components) instead of deep relative paths.',
          },
        ],
      },
    ],

    // TypeScript naming conventions
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z]',
          match: true,
        },
      },
    ],

    // Import sorting
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // @ imports (aliased paths)
          'parent', // ../ imports
          'sibling', // ./ imports
          'index', // ./index
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
  },
};
