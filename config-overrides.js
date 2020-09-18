const { override,fixBabelImports, addLessLoader, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
const path = require("path")

const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false

  return config
}

module.exports = override(
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
    ["@"]: path.resolve(__dirname, "src")
  }),
  rewiredMap()
);
