let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, options) => {
    const devMode = options.mode !== 'production';
    return {
        entry: './src/js/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'js/index.js',
            publicPath: '/'
        },
        devServer: {
            overlay: true,
            publicPath: '',
            contentBase: path.join(__dirname, 'src/'),
            watchContentBase: true,
            historyApiFallback: {
                disableDotRule: true
            },
            host: "api.localhost",
            port: 4200


        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    loader: "babel-loader",
                    query: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    },
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: devMode ? [
                            {
                                loader : 'css-loader',
                                options : {
                                    sourceMap: 'true'
                                }
                            },
                            {
                                loader : 'sass-loader',
                                options : {
                                    sourceMap: 'true'
                                }
                            }] : [
                             'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        autoprefixer({
                                            browsers:['ie >= 8', 'last 4 version']
                                        }),
                                        cssnano()
                                    ]
                                }
                            }, 'sass-loader'
                            ]
                    })
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader : "file-loader",
                    query : {
                        name: '../fonts/[name].[ext]',
                        emitFile: false,
                        publicPath: function(url) {
                            return url.replace(/dist/, '')
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader : "file-loader",
                    query : {
                        name: '../img/[name].[ext]',
                        emitFile: false,
                        publicPath: function(url) {
                            return url.replace(/dist/, '')
                        }
                    }
                }
            ]
        },
        plugins: [
            devMode ? false :  new CleanWebpackPlugin(path.resolve(__dirname, './dist')),
            new ExtractTextPlugin("css/styles.css"),
            devMode ? new webpack.SourceMapDevToolPlugin({
                filename: devMode ? "[file].map" : '',
                exclude: ["/vendor/"]
            }) : false,
            new CopyWebpackPlugin([
                {from:'src/img',to:'img'},
                {from:'src/fonts',to:'fonts'},
                // {from:'src/index.html',to: ''}
            ]),
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ].filter(Boolean),

        devtool : (devMode) ? 'cheap-module-eval-source-map' : false
    };
};