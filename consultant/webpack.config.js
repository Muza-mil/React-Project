const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, 
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
         test: /\.(png|svg|jpeg|jpg|gif)$/,
         use: [
           'file-loader?name=[name].[ext]&outputPath=media/'
         ]
   }
]
module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/Presentational Components/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {rules},
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        contentBase: './',
        port: 5000
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Consultant',
        hash: true,
        template: './index.html'
    })]
}