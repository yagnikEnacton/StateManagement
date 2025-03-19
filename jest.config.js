module.exports = {
  preset: '@testing-library/react-native',

  moduleFileExtension: ['ts', 'tsx', 'js', 'jsx', 'json'],
  // Optionally, you can specify how to handle 'node_modules' if necessary:
  setupFileAfterEnv: ['./jest-setup.ts'],
  transform: {'^.+\\.(ts|tsx)$': 'babel-jest'},
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-redux|@react-navigation|@react-native|@react-native/assets)/)',
  ],
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.(tsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  moduleNameMapper: {},
  collectCoverage: true,
  coverageReports: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/navigator/*.tsx',
  ],
};
