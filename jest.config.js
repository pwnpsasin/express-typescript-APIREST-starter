module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)(spec|test).ts?(x)'
],
moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
],
moduleDirectories: [
    'node_modules'
]
};

