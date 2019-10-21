const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test:/\.js$/,
        loader: 'babel-loader',
      },
      {
        test:/\.(scss|sass)$/,
        use:[
            'vue-style-loader',
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test:/\.jpg$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: "index.html",
      }),
  ]
};