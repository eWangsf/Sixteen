var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'postcss-loader'
                }
            ]
        }
      ]
    },

    plugins: [
      new webpack.BannerPlugin('Sixteen'),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html")
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
      alias: {
        containers: path.join(__dirname, 'src/containers'),
        actions: path.join(__dirname, 'src/actions'),
        reducers: path.join(__dirname, 'src/reducers')
      }
    },

 
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      port: 8081,
      inline: true,
      hot: true
    }

};