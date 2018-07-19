const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/w', (req, res) => {
  res.sendFile(__dirname + '/webcam.min.js')
})

io.on('connection', (socket) => {
  console.log('CONNECTED')

  socket.on('transmit', (data) => {
    console.log('DATA: ' + data)
  })

  socket.on('disconnect', () => {
    console.log('DISCONNECTED')
  })

})

http.listen(3000, () => {
  console.log('READY ON http://localhost:3000')
})