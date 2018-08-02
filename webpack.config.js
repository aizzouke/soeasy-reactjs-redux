const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/app.conf.js',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-react-jsx'],
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: [
            'file-loader?name=img/[name].[ext]',
            'image-webpack-loader',
          ],
        },
        {
          test: /\.(otf|ttf|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' }),
        },
        { test: /\.json$/, loader: 'json-loader' },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'release/mypos'),
      filename: 'app.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'release/mypos'),
      compress: true,
      inline: true,
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'SPA based on ReactJS',
        hash: true,
        template: './src/index.html',
      }),
      new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true,
      }),
      new CopyWebpackPlugin([
        { from: './src/configuration.js', to: '' },
      ], {}),
      new ZipPlugin({
        path: path.resolve(__dirname, 'release'),
        filename: 'ReactPOC.zip',
        extension: 'zip',
        fileOptions: {
          mtime: new Date(),
          mode: 0o100664,
          compress: true,
          forceZip64Format: false,
        },
      }),
    ],
  };
};
