const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".vue"], //webpack should loadup .vue files
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/, //any file that ends with mjs or js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //process all react jsx and all es6...15 and convert it to es5
            plugins: ["@babel/plugin-transform-runtime"], //enable additional features inside the browser like async await
          },
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
