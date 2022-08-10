const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js', //products is related to the name property. The rest is the url for the remoteEntry file
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};