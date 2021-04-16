const path = require('path');
const Dotenv = require('dotenv-webpack');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
    },
    plugins: [new Dotenv()],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env', 'babel-preset-react'],
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ],
    },
};
