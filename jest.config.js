module.exports = {
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
	coveragePathIgnorePatterns: ['./node_modules/', './test/'],
	coverageReporters: ['json-summary', 'text', 'lcov'],
	moduleNameMapper: {
		'@(.*)$': '<rootDir>/src/$1',
	},
};
