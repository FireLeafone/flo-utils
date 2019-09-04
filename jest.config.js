module.exports = {
  verbose: false,
  collectCoverage: true, // 是否收集测试时的覆盖率信息
  collectCoverageFrom: [ // 哪些文件需要收集覆盖率信息
    "<rootDir>/src/**/*.js",
    "!src/**/__test__/*.js",
  ],
  moduleFileExtensions: ["js"],
  testPathIgnorePatterns: ['/node_modules/']
};