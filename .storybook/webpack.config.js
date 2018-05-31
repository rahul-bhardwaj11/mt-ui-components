// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");
const resolve = require("path").resolve;
module.exports = {
  resolve: {
    alias: {
      styles: resolve(__dirname, "../src/styles"),
      images: resolve(__dirname, "../src/images")
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[folder]__[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react", "es2015", "stage-0"],
          plugins: [
            "add-module-exports",
            "transform-es2015-modules-umd",
            "transform-remove-strict-mode",
            "transform-decorators-legacy"
          ]
        }
      },
      {
        test: /\.jpg$/,
        use: "url-loader?limit=8192&name=[name].[ext]"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file?name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url?name=images/[name].[ext]&limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
