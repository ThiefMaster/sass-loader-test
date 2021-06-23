const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const importOnce = require('node-sass-import-once');

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    path: path.resolve(__dirname, './out/'),
    filename: 'index.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sassOptions: {
                includePaths: ['src/styles'],
                outputStyle: 'compact',
                importer: [importOnce],
              },
            },
          },
        ]
      },
    ]
  }
};
