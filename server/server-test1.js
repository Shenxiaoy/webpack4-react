const koa = require('koa')
const router = require('koa-router')()
const cors = require('koa2-cors')

const app = new koa()
app.use(cors({
    origin: function(ctx) {
        return ctx.header.origin
    }
}))

router.post('/diy/list', async (ctx, next) => {
    console.log(ctx.request.body, '-----')
    const str = {name: 'age', age: 'name'}
    ctx.response.body = JSON.stringify(str)
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3003, function () {
    console.log('post:' + 3003)
})