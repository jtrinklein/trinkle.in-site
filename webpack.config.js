const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'] 
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.webpack.json'
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'trinkle.in',
      meta: {
        charset: "utf-8",
        description: "Apps made by jtrinklein.",
        keywords: "trinklein,apps,jtrinklein",
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          // If absolute path is a `glob` we replace backslashes
          //  with forward slashes, because only forward slashes
          //  can be used in the `glob`
          from: path.resolve(__dirname, 'www', '*').replace(/\\/g, '/'),
          to(ctx, absoluteFilename) {
            return '[name][ext]'
          }
        },
      ]
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};