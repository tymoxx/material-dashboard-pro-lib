const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "example/src/index.js"), // webpack entry point. Module to start building dependency graph
/*    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },*/
    module: {  // defined file patterns and their loaders
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {  // configuration for webpack-dev-server
        // contentBase: './src/public',  //source of static assets
        port: 3001, // port to run dev-server
    }
};