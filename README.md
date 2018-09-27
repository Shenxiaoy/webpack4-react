## webpack4

### 开发环境

```
npm run dev
```

### 生产环境打包
```
npm run build
```

### 开发环境热更新配置步骤：

- 安装 webpack-dev-middleware、 webpack-hot-middleware, 在node 环境中添加中间件

```
...
const compiler = webpack('devConfig')
app.use(require('webpack-dev-middleware')(compiler)
app.use(require('webpack-hot-middleware')(compiler)
```

- 在多页面入口中entry, 打包入口数组中添加 热更新配置
```
module.exports = {
  entry: {
    index: ['../src/index.js', 'webpack-hot-middleware/client?noInfo=true&reload=true&quiet=true']
    ...
  }
  ...
}
```

- 在入口js文件中添加热更新注册代码

```
 if(module.hot){
   module.hot.accept()
 }
```