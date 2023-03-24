const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        emitWarning: dev,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
