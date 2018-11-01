const Router = require('koa-router')
const router = new Router()

router.get('/alert', (ctx, next) => {
  ctx.response.body = 'alert'
})

module.exports = router
