const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest' //when HtmlWebpackPlugin tries to refer to some js file that has been created (takes the file name and prepend them with the public path)
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ],
};

module.exports = merge(prodConfig, commonConfig);