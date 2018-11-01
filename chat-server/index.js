const koa = require('koa')
const IO = require('koa-socket-2')
const Router = require('koa-router')

const app = new koa()
const io = new IO()
const router = new Router()

/*
* routes
* */
const chatRoutes = require('./routes/chat')

router.get('/', (ctx, next) => {
  ctx.redirect('/chat.html')
})

router.get('/test', (ctx, next) => {
  ctx.response.body = 'test'

})

router.use('/chat', chatRoutes.routes(), chatRoutes.allowedMethods())

app.use(router.routes())
  .use(router.allowedMethods())

io.attach(app)

io.on('connection',(ctx) => {
  const {socket} = ctx
  socket.on('message', data => {
    socket.broadcast.emit('message', data)

  })

  socket.on('joinRoom', data => {
    socket.join(data.roomName)
  })

  socket.on('leaveRoom', data => {
    socket.leave(data.roomName)
  })

  socket.on('sendMsg', (data, fn) => {

    socket.broadcast.to(data.roomName).emit('receiveMsg', data)
  })

})

app._io.emit('ss', {})

app.listen(9991, () => {
  console.log('监听' + 9991)
})