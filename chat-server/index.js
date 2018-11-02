const koa = require('koa')
const path = require('path')
const IO = require('koa-socket-2')
const Router = require('koa-router')
const koaBody = require('koa-body')
const koaCors = require('koa-cors')
const multer = require('koa-multer')
const serve = require('koa-static')
const send = require('koa-send')

const app = new koa()
const io = new IO()
const router = new Router()

app.use(koaCors())
app.use(serve(__dirname + '/static'))


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

router.get('/', (ctx, next) => {
  ctx.redirect('/chat.html')
})
router.get('/test', (ctx, next) => {
  ctx.response.body = 'test'
  return ctx.body = '1111111111111111'
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