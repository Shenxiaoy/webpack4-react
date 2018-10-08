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

## 图片打包问题
在js中img src直接引入图片路径，并没有被打包，因为没有被依赖识别

解决办法：引入图片地址，作为变量引入到src 中
```
import imgSrc from './img/1.png'
<img src={imgSrc} />
```

在webpack4 最新打包配置中暂无发现解决这个问题的办法。

## optimization splitChunkPlugin 多页面优化：代码分离，公共模块打包

会把 node_modules依赖打包到公共js中去，也会把公共依赖的组件打包到公共js中。



```
  module.exports = {
    //...
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  };
```
- chunks: all/表示所有依赖的 node_modules都会被打包到 vendors.js 中; initial; async;
- automaticNameDelimiter: 表示生成的分离js名称分隔符 如 vendor~user.js
- minSize: 表示抽取出来的文件在压缩前最小值限制，默认为30000字节
- maxSize: 表示抽取出来的文件在压缩前最大值限制，默认为 0，表示不限制最大大小；
- maxAsyncRequests: 最大的按需(异步)加载次数，默认为 5
- maxInitialRequests：最大的初始化加载次数，默认为 3；
- name: 抽取出来文件的名字，默认为 true，表示自动生成文件名；默认为vendor
- cacheGroups: 缓存组，在这里可以自定义 需要把哪种类型、路径上的依赖进行打包

```
splitChunks: {
      cacheGroups: {
        // node_modules下所有依赖进行打包
        // common: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'common',
        //   chunks: 'initial',
        //   priority: 2,
        //   minChunks: 2,
        // },
        //  将react antd lodash 进行打包
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: 10,
          test: /[\\/]node_modules[\\/][(react)|(antd)|(lodash)]/
        }
      }
    }
```
### cacheGroups 配置参数

- test: 正则匹配所需要打包的内容，值可以为正则、string、function
- priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
- reuseExistingChunk：表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。

#### webpack.ProvidePlugin

> 定位全局变量

```
new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			'React':'react',
			'ReactDOM':'react-dom',
			moment:'moment'
		}),
```





