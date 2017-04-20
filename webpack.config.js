// run with -> webpack-dev-server: use node express
// look for CommonsChunkPlugin if you want to optimize common code, and probably you want to bundle vendor separately

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.(png|jpg)$/,
                // if an image is bigger than 20 kb it will create a direct url to the image asset and file loader is gonna to take care of this task
                loader: 'url-loader?limit=20000',
            }
        ],
    }
};
