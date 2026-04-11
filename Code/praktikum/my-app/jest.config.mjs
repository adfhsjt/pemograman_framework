import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    modulePaths: ['<rootDir>/src/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/pages/produk/index.tsx',
        'src/views/product/index.tsx',
        'src/views/produk/hero.tsx',
        'src/views/produk/index.tsx',
        'src/views/produk/main.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
    },
}

export default createJestConfig(config);