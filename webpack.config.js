const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: {
    entry: './assets/src/index.js'
},
output: {
    path: __dirname + './assets/src/index.html',
    filename: 'bundle.js'
},
module: {
    rules: [
    {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
    },
    {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
    }
    ]
},
resolve: {
    extensions: ['*', '.js', '.jsx']
},
plugins: [
    new HtmlWebpackPlugin({
    template: 'assets/src/index.html'
    })
  ]
}