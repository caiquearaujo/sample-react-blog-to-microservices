module.exports = {
	rootDir: '.',
	roots: ['<rootDir>/src'],
	testMatch: ['**/src/*spec.+(ts|tsx)'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	coveragePathIgnorePatterns: [
		'./node_modules/',
		'./test/',
		'./debug',
		'./build',
	],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				diagnostics: false,
				tsconfig: 'tsconfig.json',
			},
		],
	},
	preset: 'ts-jest',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
	},
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
