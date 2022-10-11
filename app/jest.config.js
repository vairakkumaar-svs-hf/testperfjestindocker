'use strict';

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: [
  //   'services/*.js'
  // ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // extensionsToTreatAsEsm: [
  //   '.js',
  //   '.mjs'
  //   ],
  // testPathIgnorePatterns: [
  //   'models/test.js'
  //   // "\\\\node_modules\\\\"
  // ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0
    }
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  'reporters': [ 'default', 'jest-junit' ],
  'coverageReporters': ['json', 'lcov', 'text', 'clover', 'cobertura']
};