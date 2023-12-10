const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
<<<<<<< HEAD
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/,
        type: "asset/resource"
=======
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/files/[name].[ext]",
            },
          },
        ],
>>>>>>> 621716a139ea01dfe864756e44338ea955bb3762
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator : {
          filename : 'assets/fonts/[name][ext][query]',
        }
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
=======
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
>>>>>>> 621716a139ea01dfe864756e44338ea955bb3762
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    devMiddleware: {
      publicPath: "/dist/",
    },
    port: 3000,
    hot: "only",
    historyApiFallback: true,
  },
  watch: process.env.NODE_ENV === "development" && true,
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
