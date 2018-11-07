const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

router.get('/', async(ctx, next) => {

  console.log('客户端ip',ctx.req)
  ctx.body = '<a>1111</a>'

})



app.use(router.routes())
  .use(router.allowedMethods())

app.listen(9001, function() {
  console.log('9001端口')
})