const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const chalk = require('chalk');
const postcssConfig = require('./postcssConfig');
const pkg = require(path.join(process.cwd(), 'package.json'));
const fs = require('fs');
const resolve = require('path').resolve;

const entries = [];
const configs = [];
fs.readdirSync('./src/components/').forEach((file) => {
  const isValid = new RegExp(/^(?!.*images|styles|.DS_Store).*$/g).test(file);
  if (isValid) {
    entries.push({
      name: `mt${file}`,
      destSrc: `${file}/${file}`,
      srcSrc: `./src/components/${file}/index`
    });
  }
});


for (let i = 0; i < entries.length; i++) {
  const config = {
    output: {
      path: path.join(__dirname, '../lib'),
      filename: '[name].js',
      library: entries[i].name,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },

    resolve: {
      modules: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        [pkg.name]: process.cwd(),
        styles: resolve(__dirname, '../src/components/styles')
      }
    },

    module: {
      noParse: [/moment.js/],
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015', 'stage-0'],
            plugins: [
              'add-module-exports',
              'transform-es2015-modules-umd',
              'transform-remove-strict-mode',
              'transform-decorators-legacy'
            ]
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: Object.assign({}, postcssConfig, { sourceMap: true })
              }
            ]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: Object.assign({}, postcssConfig, { sourceMap: true })
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true
      }),
      new CaseSensitivePathsPlugin(),
      new webpack.BannerPlugin(`
${pkg.name} v${pkg.version}
Copyright 2015-present, Alipay, Inc.
All rights reserved.
      `),
      new webpack.ProgressPlugin((percentage, msg, addInfo) => {
        const stream = process.stderr;
        if (stream.isTTY && percentage < 0.71) {
          stream.cursorTo(0);
          stream.write(`📦  ${chalk.magenta(msg)} (${chalk.magenta(addInfo)})`);
          stream.clearLine(1);
        } else if (percentage === 1) {
          console.log(chalk.green('\nwebpack: bundle build is now finished.'));
        }
      })
    ]
  };
  config.entry = {};
  config.entry[entries[i].destSrc] = entries[i].srcSrc;
  config.externals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  };
  configs.push(config);
}

module.exports = configs;
