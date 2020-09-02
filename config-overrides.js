const { override,fixBabelImports, addLessLoader, addWebpackAlias, addPostcssPlugins } = require('customize-cra');
const path = require("path")
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader(),
  addPostcssPlugins([
    require("postcss-px2rem")({ remUnit: 37.5 })
  ]),
  addWebpackAlias({//配置路径别名
    ["@"]: path.resolve(__dirname, "src")
  }),
);
