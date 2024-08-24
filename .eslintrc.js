// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsNamingConvention = require('./ts-naming-convention.js');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier', // Ensure "prettier" is last
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json'], // Add this line to support `.json` files
  },
  plugins: ['prettier', 'react', 'import', 'jsx-a11y', '@typescript-eslint'],
  root: true,
  ignorePatterns: ['node_modules/', 'dist/'],
  // These rules are either not present in the plugins or do not have stricter settings in the default ones.
  rules: {
    // *** ESLint Recommended Rules with Stricter Settings ***
    eqeqeq: 'error', // Enforce strict equality.
    'array-callback-return': 'error', // Ensure a return statement in array callbacks.
    'no-sequences': 'error', // Disallow comma operator.
    'no-useless-concat': 'error', // Disallow unnecessary concatenation.
    'no-redeclare': 'error', // Disallow variable redeclaration.
    'no-lone-blocks': 'error', // Disallow unnecessary nested blocks.
    'no-extra-boolean-cast': 'error', // Disallow unnecessary boolean casts.
    'no-unexpected-multiline': 'error', // Disallow confusing multiline expressions.
    'no-var': 'error', // Require let or const instead of var.
    'prefer-spread': 'error', // Suggest using spread syntax instead of .apply().
    'prefer-rest-params': 'error', // Suggest using rest parameters instead of arguments.
    'no-console': ['error', { allow: ['warn', 'error'] }], // Disallow console logs.
    'max-lines': [
      'error',
      { max: 500, skipComments: true, skipBlankLines: true },
    ],

    // *** General JavaScript Rules ***
    'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings.
    'no-restricted-globals': 'error', // Disallow specified global variables.

    // *** React and JSX Rules ***
    'react/react-in-jsx-scope': 'off', // * Not needed with React 17+
    'react/jsx-uses-react': 'off', // * Not needed with React 17+
    'react/prop-types': 'off', // * Not needed with TypeScript
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/display-name': 'error', // Prevent missing displayName in a React component definition.
    'react-hooks/exhaustive-deps': 'error', // Verifies the list of dependencies for Hooks like useEffect and similar.
    'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments.

    // *** TypeScript Rules ***
    '@typescript-eslint/ban-ts-comment': 'warn', // Restrict @ts-<directive> comments from being used.
    '@typescript-eslint/no-explicit-any': 'error', // Disallow usage of the any type.
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforces consistent usage of type definitions.
    '@typescript-eslint/no-duplicate-enum-values': 'error', // Disallow duplicate enum values.
    '@typescript-eslint/await-thenable': 'error', // Disallow waiting for a value that are not Thenable.
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // allow unused arguments exceptionally that start with an underscore.
        varsIgnorePattern: '^_', // allow unused variables exceptionally that start with an underscore.
      },
    ],

    // *** Import Rules ***
    'import/no-named-as-default-member': 'error', // * Stricter than default
    'import/no-named-as-default': 'error', // * Stricter than default
    'import/no-duplicates': 'error', // * Stricter than default
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern:
              '@{components,styles,config,fonts,hooks,images,pages,utils}/**',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
      },
    ],

    // *** Naming Convention Rules ***
    '@typescript-eslint/naming-convention': tsNamingConvention,
  },
  overrides: [],
  env: {
    browser: true,
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
        extensions: [',.js', ',.jsx', ',.ts', ',.tsx'],
      },
    },
  },
};
