const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const isEnvDevelopment = process.env.NODE_ENV === 'development';

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: { presets: ['react-app'] },
};

const styleLoader = require.resolve('style-loader');

const cssLoader = {
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: { getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent') },
  },
};

const sassLoader = require.resolve('sass-loader');

module.exports = {
  mode: isEnvDevelopment ? 'development' : 'production',
  entry: {
    content_scripts: path.resolve(__dirname, 'src', 'content_scripts'),
    background: path.resolve(__dirname, 'src', 'background'),
    slide_iframe: path.resolve(__dirname, 'src', 'content_scripts', 'slide'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),

    filename: (chunkData) => {
      return chunkData.chunk.name === 'slide_iframe' ? 'content_scripts/slide.js' : '[name]/index.js';
    },
  },
  devtool: isEnvDevelopment ? 'cheap-module-source-map' : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [babelLoader],
      },
      {
        test: /\.(css|scss)$/,
        use: [styleLoader, { ...cssLoader, options: { importLoaders: 1 } }, sassLoader],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isEnvDevelopment: isEnvDevelopment,
    }),
    new CopyPlugin([
      { from: 'manifest.json', context: 'src/' },
      { from: '*', to: 'icons', context: 'src/icons' },
    ]),
    new HtmlWebpackPlugin({
      chunks: ['slide_iframe'],
      filename: 'content_scripts/slide.html',
      minify: false,
    }),
    isEnvDevelopment && new LiveReloadPlugin(),
  ].filter((e) => e),
};
