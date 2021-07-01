const { override,fixBabelImports, addLessLoader, addWebpackAlias, addPostcssPlugins, overrideDevServer } = require('customize-cra');
const path = require("path")
const { name } = require('./package');
const ip = require('ip').address();


const rewiredMap = () => config => {
  // config.port=1688
  // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  // config.devServer.headers = {
  //   'Access-Control-Allow-Origin': '*',
  // }
  return {
    ...config,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}

const webpackConfig = () => config => {
  config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.output.publicPath = `//${ip}:${process.env.PORT}/`
    return config;
}

if (process.env.NODE_ENV == 'development') {
  process.env.PORT = '1921'
}

module.exports = {
  webpack:override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true
      }
    }),
    addPostcssPlugins([
      require("postcss-px2rem")({ remUnit: 75 })
    ]),
    addWebpackAlias({//配置路径别名
      "@": path.resolve(__dirname, "src")
    }),
    webpackConfig()
  ),
  devServer: overrideDevServer(rewiredMap())
}
