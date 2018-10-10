const koa = require('koa')
const IO = require('koa-socket-2')

const app = new koa()
const io = new IO()

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