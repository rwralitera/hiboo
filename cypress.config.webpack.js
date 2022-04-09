const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new NodePolyfillPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
