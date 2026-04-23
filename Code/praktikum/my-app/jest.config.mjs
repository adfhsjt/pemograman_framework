import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/jest.config.mjs',
        '!**/next.config.mjs',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**',
        '!**/jest.setup.ts'
        
    ],
}

export default createJestConfig(config);