import config from './config.js'
import webpack from 'webpack'
import path from 'path'
const DEST = config.baseConfig.publishDir

export default {
  devtool: '',
  mode: 'production',
  entry: [
    path.resolve('') + '/src/js/entry.js'
  ],
  output: {
    path: path.resolve('') + DEST,
    filename: config.tasks.webpack.filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  externals: {
    jquery: 'window.jQuery'
  }
}
