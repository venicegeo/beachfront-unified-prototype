const path = require('path')

const ENTRY = './src/main.js'

const __environment__ = process.env.NODE_ENV || 'development'

module.exports = {
    devtool: '#source-map',

    entry: __environment__ === 'production' ? ENTRY : [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        ENTRY,
    ],

    output: {
        path: path.resolve(__dirname, '../beachfront/static'),
        filename: 'build.js',
        publicPath: __environment__ === 'production' ? '/static/' : 'http://localhost:8080/',
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
