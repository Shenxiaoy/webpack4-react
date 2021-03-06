# webpack4 配置介绍
## 安装 webapck 配置依赖的库

```
npm i webpack webpack-cli html-webpack-plugin webpack-dev-middleware webpack-hot-middleware
clean-webpack-plugin webpack-merge  --save-dev
```
- friendly-errors-webpack-plugin  |  识别某些类型的webpack错误并清理，聚合和优先级，以提供更好的开发人员体验。


安装前端框架依赖库
```
npm i react react-dom antd --save
npm i babel-preset-react --save-dev
```

安装 babel 转译(应用babel7)
```
npm install @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime style-loader
css-loader less less-loader file-loader url-loader @babel/runtime @babel/preset-react --save-dev
```

一些额外配置合扩展兼容babel

```
npm install url-loader connect-history-api-fallback mini-css-extract-plugin --save-dev
```

- connect-history-api-fallback  ||  通过指定索引页面代理请求的中间件，防止单页面应用服务器路由找不到索引
- mini-css-extract-plugin  ||  css样式从js中分离 作为外部文件引入
- babel-plugin-add-module-exports || 遵循es6语法，没必要再回到转译为es5（ export default） 的表现
- babel-preset-react-hmre  实现react 热加载，局部刷新(最新配置不需要）

项目根目录下新建 .babelrc 文件，添加相关转译的配置
```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": ["@babel/transform-runtime"]
}

```

eslint 依赖包
```
npm install eslint eslint-loader eslint-plugin-react eslint-plugin-import eslint-config-airbnb --save-dev
```





