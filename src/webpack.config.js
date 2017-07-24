var path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader'],
            exclude: /node_modules/
        }]
    }
};