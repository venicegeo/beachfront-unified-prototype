const path = require('path')

const __environment__ = process.env.NODE_ENV || 'development'

module.exports = {
    devtool: '#source-map',

    entry: './main.js',

    output: {
        path: path.resolve(__dirname, '../beachfront/static'),
        filename: 'build.js',
        publicPath: __environment__ === 'production' ? '/static/' : 'http://localhost:8079/',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
            },
        ],
    },
}
