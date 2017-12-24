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
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/

        }, {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }
            ]
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
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
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
        components: path.join(__dirname, 'src/components'),
        actions: path.join(__dirname, 'src/actions'),
        reducers: path.join(__dirname, 'src/reducers'),
        scss: path.join(__dirname, 'src/scss'),
        images: path.join(__dirname, 'src/images')
      },
      extensions: [".js", ".jsx"]
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