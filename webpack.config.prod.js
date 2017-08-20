import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'), //This global makes sure React is built in prod mode.
  __DEV__: false // potentially useful for feature flags. More info: https://github.com/petehunt/webpack-howto#6-feature-flags
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: true,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' // [name] burada entry içindeki adı ifade eder, yani vendor ve main
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
     // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Create html file that includes reference to bundle js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      //trackJSToken: '43ad216f57d94259968435894490a5c7'
    }),

    // Eliminate duclicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify js
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true // webpack-1 default true while webpack-2 default false
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")}
    ]
  }
};
