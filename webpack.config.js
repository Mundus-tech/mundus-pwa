const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 3000,
  },
}
