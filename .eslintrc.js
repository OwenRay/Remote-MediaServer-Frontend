module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'prettier',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['import', '@typescript-eslint', 'react', 'react-hooks', 'jest'],
	env: {},
	rules: {
		// Disabled and replaced by "@typescript-eslint/naming-convention"
		camelcase: 'off',
		eqeqeq: 'error',
		'no-use-before-define': 'off',
		'no-console': 'error',

		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/no-cycle': 'error',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '~/{utils,helpers}/**',
						group: 'external',
						position: 'after',
					},
					{
						pattern: '~/test-helpers/**',
						group: 'external',
						position: 'after',
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
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					object: false,
				},
				extendDefaults: true,
			},
		],
		// Although explicit types are not enforced, they are expected to be defined by any functions exported in an index file
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'property',
				format: ['camelCase', 'PascalCase', 'snake_case'],
			},
			{
				selector: 'parameter',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'enumMember',
				format: ['PascalCase'],
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true,
				},
			},
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',

		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/require-default-props': 'off',
		'react/display-name': 'off',

		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				singleQuote: true,
				semi: true,
				trailingComma: 'all',
				endOfLine: 'auto',
			},
		],
	},
	overrides: [
		{
			files: ['**/*.js'],
			env: {
				node: true,
			},
			plugins: ['import', 'prettier'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',

				// dev-dependencies may be used in build scripts
				'import/no-extraneous-dependencies': [
					'error',
					{
						devDependencies: true,
					},
				],
			},
		},
		{
			files: [
				'src/test/**/*.{ts,tsx}',
				'**/*.spec.{ts,tsx}',
				'jest.setup.ts',
				'**/__mocks__/*.{ts,tsx}',
			],
			env: {
				'jest/globals': true,
			},
			rules: {
				// `any` may be used for creating dummy data
				'@typescript-eslint/no-explicit-any': 'off',

				// empty functions may be used for mocks
				'@typescript-eslint/no-empty-function': 'off',

				// we want to use non null assertions in test (to fail early)
				'@typescript-eslint/no-non-null-assertion': 'off',

				// object['property'] notation may be used for testing private properties
				'dot-notation': 'off',

				// dev-dependencies may be used in tests
				'import/no-extraneous-dependencies': [
					'error',
					{
						devDependencies: true,
					},
				],
			},
		},
	],
};
