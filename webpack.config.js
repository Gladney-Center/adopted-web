const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

module.exports = env => {
    const baseConfig = {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                importer: globImporter()
                            }
                        }
                    ]
                },
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|gif|png|jpg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader'
                  }
            ]
        },
        performance: {
            hints: false
        }
    }
    
    const adoptedConfig = Object.assign({},baseConfig,{
        entry: ['./src/js/adopted.js','./src/sass/adopted.sass'],
        output: {
            path: path.resolve(__dirname, 'web'),
            filename: 'assets/js/adopted.min.js',
            publicPath: '/'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'app/themes/adopted/style.min.css'
            }),
            new webpack.DefinePlugin({ 'process.env.APP_MODE': JSON.stringify(env.APP_MODE) })
        ]
    })
    
    const portalConfig = Object.assign({},baseConfig,{
        entry: ['./src/js/portal/portal.js','./src/sass/portal/portal.sass'],
        output: {
            path: path.resolve(__dirname),
            filename: 'assets/js/[name].min.js',
            publicPath: '/'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].min.css'
            }),
            new HtmlWebpackPlugin({
                filename: 'web/portal/index.html',
                template: 'templates/portal.html',
                title: 'AdoptED Curriculum Portal',
                inject : true,
                hash: true
            })
        ]
    })
    return [
        adoptedConfig,
        portalConfig
    ]
}