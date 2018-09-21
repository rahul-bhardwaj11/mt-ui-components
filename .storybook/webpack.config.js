// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");
const resolve = require("path").resolve;
var sass = require("node-sass");
var sassUtils = require("node-sass-utils")(sass);
const sassVars = require("../src/styles/theme.js");


module.exports = {
  resolve: {
    alias: {
      fonts: resolve(__dirname, "../src/styles/fonts")
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
          {
            loader: "sass-loader",
            options: {
              modules: true,
              localIdentName: "[folder]__[local]___[hash:base64:5]",
              functions: {
                "get($keys)": function(keys) {
                  keys = keys.getValue().split(".");
                  let result = sassVars;
                  let i;
                  for (i = 0; i < keys.length; i++) {
                    result = result[keys[i]];
                  }
                  result = sassUtils.castToSass(result);
                  return result;
                }
              }
            }
          }
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
