module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};
