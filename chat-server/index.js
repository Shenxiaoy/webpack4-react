const koa = require('koa')
const path = require('path')
const IO = require('koa-socket-2')
const Router = require('koa-router')
const koaBody = require('koa-body')
const koaCors = require('koa-cors')
const multer = require('koa-multer')
const serve = require('koa-static')
const send = require('koa-send')
const session = require('koa-session')
const sessionConfig = require('./config/basic_session')

const app = new koa()
const io = new IO()
const router = new Router()
var onlineNum = []

app.use(session(sessionConfig, app))
app.use(koaCors())
app.use(serve(__dirname + '/static'))

io.attach(app)


/*
* 上传
* */
let storage = multer.diskStorage({
  destination: path.resolve('upload'),
  filename: (ctx, file, cb)=>{
    cb(null, file.originalname)
  }
});
let fileFilter = (ctx, file ,cb)=>{
//过滤上传的后缀为txt的文件
  if (file.originalname.split('.').splice(-1) == 'txt'){
    cb(null, false)
  }else {
    cb(null, true)
  }
}
let upload = multer({ storage: storage, fileFilter: fileFilter })
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    status: 1,
    body: {url: '一一一一一'}
  }
})

/*
* routes
* */
const chatRoutes = require('./routes/chat')

router.get('/test', (ctx, next) => {
  ctx.body = 'session'
})

router.use('/chat', chatRoutes.routes(), chatRoutes.allowedMethods())

app.use(router.routes())
  .use(router.allowedMethods())

/*
* io.on  app.io.on   app._io.on  作用相似
*
* */
io.on('connection',(ctx) => {

  const { socket } = ctx
  socket.on('message', data => {
    socket.broadcast.emit('message', data)

  })

  socket.on('joinRoom', data => {
    socket.join(data.roomName)
  })

  socket.on('leaveRoom', data => {
    socket.leave(data.roomName)
  })

  socket.on('sendMsg', data => {

    socket.broadcast.to(data.roomName).emit('receiveMsg', data)
  })

  socket.on('onlineUsers', data => {
    if(!onlineNum.includes(data.interimName)) {
      onlineNum.push(data.interimName)
    }
    console.log(onlineNum, 'online')
    socket.broadcast.emit('onlineHeight', {mans: onlineNum.length})
    socket.emit('onlineHeight', {mans: onlineNum.length})
  })

  socket.on('leaveChat', data => {
    console.log(onlineNum)
    const id = data.id

    if(onlineNum.indexOf(id) !== -1) {
      const index = onlineNum.indexOf(id)
      onlineNum.splice(index, 1)
      socket.broadcast.emit('onlineHeight', {mans: onlineNum.length})
      socket.emit('onlineHeight', {mans: onlineNum.length})
    }

  })

})

app.listen(9991, () => {
  console.log('监听： 9991 端口')
})