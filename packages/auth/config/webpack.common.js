module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, //any file that ends with mjs or js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],//process all react jsx and all es6...15 and convert it to es5
                        plugins: ['@babel/plugin-transform-runtime'], //enable additional features inside the browser like async await
                    }
                },
            }
        ] 
    }
};