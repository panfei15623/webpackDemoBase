//导入webpack
var webpack = require('webpack');
var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        app: ['./src/js/index.js']
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname,"./dist"),
        publicPath: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']},
            {test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192'},
            {test:  /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=25000'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
    ]
};