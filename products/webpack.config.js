const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({ //generates versions of src/index.js "src_index_js.js" that can be safely loaded in the browser
            //the name should be the same in this url <name>@http://localhost:8081/remoteEntry.js'
            name: "products", //added for clarity. only needed for remotes
            filename: "remoteEntry.js", //contains a list of files that are available from this project + directions on how to load them
            exposes: {
                './ProductsIndex': "./src/bootstrap" //which files in our project are we gonna expose
            },
            shared: {//specify the shared libs so it is not loaded more than one time in the browser
                faker: {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' //put the built code in script tag in the html file
        })
    ]
};