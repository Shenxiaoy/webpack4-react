const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlGenerator = function(views) {
  const r = []
  for(const key in views) {
    const staticUrl = (process.env.NODE_ENV  === 'production' ? './assets/' : '/assets/')

    const conf = {
      filename: key + '.html',
      template: path.join(__dirname, './template.html'),
      // title: views[key]['title'],
      inject: 'body',  //打包js注入到模板中的位置， true(body)/注入到body底部；head/script插入到head中， false/不往模板中插入js,
      // favicon: '', //值为一个路径
      chunks: [key, 'vendor', 'common'],  // 在多入口中，可以决定引用哪些编译后的js文件
      // excludeChunks: ''，      //排除某些js写入
      // chunksSortMode: 'dependency', // 对编译后的多个js 进行引用排序，1 dependency/依赖关系排序；2 auto; 3 none; 4: function;
      // hash: true,  //给编译的js加？hash 用于清楚缓存  //<script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
      minify: {     //minify 的作用是对 html 文件进行压缩
        removeAttributeQuotes: true,  // 对属性的引号进行删除
        minifyJS: true,
        minifyCSS: true,
      },
      params: {
        id: key,
        staticUrl: staticUrl,
        title: views[key]['title']
      }
    }

    r.push(new htmlWebpackPlugin(conf))
  }

  return r

}

module.exports = htmlGenerator