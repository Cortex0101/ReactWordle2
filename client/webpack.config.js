const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this line

module.exports = {
    entry: './src/index.js', // Entry point of your React app
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output bundle file
        publicPath: '/', // Root URL for public files
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Test for .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Ensure React is supported
                    },
                },
            },
            {
                test: /\.css$/, // Process CSS files
                use: ['style-loader', 'css-loader'], // First use 'css-loader' to load CSS, then 'style-loader' to inject it into the DOM
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow imports without file extensions
    },
    devServer: {
        static: path.join(__dirname, 'public'), // Use 'static' instead of 'contentBase'
        historyApiFallback: true, // For React Router
        hot: true, // Enable hot module reloading
      },
    devtool: 'inline-source-map', // Enable source maps for debugging
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Use the HTML template in public folder
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'public/locales', to: 'locales' }, // Copy locales folder to dist
            ],
          }),
    ],
};