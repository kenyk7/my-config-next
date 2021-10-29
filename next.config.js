const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(new ESLintPlugin({
      emitWarning: dev,
    }));
    return config;
  },
};
