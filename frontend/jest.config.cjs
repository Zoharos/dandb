module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', 'src'],
  };
  