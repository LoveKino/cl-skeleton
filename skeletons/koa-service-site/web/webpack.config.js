var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        'index': path.join(__dirname, 'src/js/page/index.js'),
        'vendor': [
            // 'react',
            // 'react-dom'
        ]
    },
    resolve: {
        alias: {
            // 'react': path.join(__dirname, './node_modules/react/dist/react.min.js'),
            // 'react-dom': path.join(__dirname, './node_modules/react-dom/dist/react-dom.min.js')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    output: {
        path: path.join(__dirname, 'dist/js/page'),
        filename: '[name].js'
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
                    // 'react', 
                    'stage-0'
                ]
            }
        }]
    }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require']
        }
    }));
}

module.exports = config;