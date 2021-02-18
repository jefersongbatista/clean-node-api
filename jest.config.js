module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/presentation/protocols/index.ts',
    '<rootDir>/src/presentation/controllers/signup/signup-controller-protocols.ts',
    '<rootDir>/src/presentation/controllers/login/login-controller-protocols.ts',
    '<rootDir>/src/data/usecases/add-account/db-add-account-protocols.ts',
    '<rootDir>/src/data/usecases/authentication/db-authentication-protocols.ts'
  ]
}
