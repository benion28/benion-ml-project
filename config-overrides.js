const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = function override(config) {
  const envVariables = dotenv.config().parsed || {};

  // Map environment variables for Webpack DefinePlugin
  const envKeys = Object.keys(envVariables).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(envVariables[key]);
    return acc;
  }, {});

  // Add fallback for node modules in Webpack
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/'),
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util/'),
    vm: require.resolve('vm-browserify'),
    process: require.resolve('process/browser'),
  };

  // Add rules to handle `.mjs` files
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false, // Resolve bare specifiers like 'process/browser'
    },
  });

  // Add necessary plugins
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
    new webpack.DefinePlugin(envKeys),
  ]);

  return config;
};
