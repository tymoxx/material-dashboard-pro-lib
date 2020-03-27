const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
        ]
    },
    externals: [nodeExternals()]
};
