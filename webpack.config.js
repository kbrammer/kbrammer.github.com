var path = require('path');

const destinationPath = 'assets/js';

module.exports = {
    entry: './src/game.js',
    output: {
        path: path.join(__dirname, destinationPath),
        filename: 'game.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader:'eslint-loader',
                exclude: /(node_modules|bower_components|assets|webpack\.config.js)/,
            }
        ],
        loaders: [
            {
                test: /\.js$/,
      			exclude: /(node_modules|bower_components|assets|webpack\.config.js)/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015'],
                },
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
};