const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/index.js"), // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/build/my-lib',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        // publicPath: '/', // public URL of the output directory when referenced in a browser
        // libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    module: {  // defined file patterns and their loaders
        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
/*            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }*/
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};
