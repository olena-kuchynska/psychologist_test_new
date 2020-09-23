const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports =  {  
        mode: 'development',
        entry: __dirname + '/src/js/script.js',
        output: {
            path: __dirname + '/dist', 
            filename: 'main.js',  
            publicPath: '/' 
        },
        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        resolve: {
            modulesDirectories: ['node_modules']
        },
        module: {  
            rules: [
                {
                    test: /\.js/,
                    exclude: [
                        /node_modules/,
                        /index.js/,
                        /script1.js/,
                    ],
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        MiniCssExtractPlugin.loader,
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                  }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html'
            }),
            new CopyWebpackPlugin( {
                patterns: [
                { from: __dirname + '/src/images', to: 'images' },
                { from: __dirname + '/src/styles', to: 'styles' }
                ]
            })      
        ]
    };