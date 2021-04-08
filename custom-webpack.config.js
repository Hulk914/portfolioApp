// const BrotliPlugin = require(`brotli-webpack-plugin`);
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
const CompressionPlugin = require(`compression-webpack-plugin`);

module.exports = {
    plugins: [
        //         new BrotliPlugin({
        //             asset: '[fileWithoutExt].[ext].br',
        //             test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif|png)$/,
        //             deleteOriginalAssets: true
        //         }),
        // new CleanWebpackPlugin({
        //     root: process.cwd(),
        //     verbose: true,
        //     dry: false,
        //     cleanAfterEveryBuildPatterns: [
        //         path.join(__dirname, 'dist', 'my-portfolio', '*.txt'),
        //         path.join(__dirname, 'dist', 'my-portfolio', '*.js'),
        //         path.join(__dirname, 'dist', 'my-portfolio', '*.css')
        //     ]
        // })
                // new CompressionPlugin({
                //     test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
                //     filename(info){
                //         let opFile= info.path.split('.'),
                //         opFileType =  opFile.pop(),
                //         opFileName = opFile.join('.');
                //         return `${opFileName}.${opFileType}.gzip`;
                //     }
                // })
    ]
}