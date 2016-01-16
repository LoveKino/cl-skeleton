var path = require('path');
var webpack = require('webpack');

var node_module_path = path.join(__dirname, '../../node_modules');

var config = {
    entry: {
        'index': path.join(__dirname, 'index.js')
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    'es2015',
                    'react',
                    'stage-0'
                ]
            }
        }]
    }
};

module.exports = config;