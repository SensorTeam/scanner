const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const im = require('image-data-uri')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/w', (req, res) => {
  res.sendFile(__dirname + '/webcam.min.js')
})

app.get('/j', (req, res) => {
  res.sendFile(__dirname + '/jquery-1.11.1.js')
})

io.on('connection', (socket) => {
  let counter = 0

  console.log('CONNECTED')

  socket.on('transmit', (data) => {
    const path = __dirname + '/data/file' + counter.toString() + '.jpg'
    counter++
    im.outputFile(data, path)
    console.log('RECEIVED: ' + path)
  })

  socket.on('disconnect', () => {
    console.log('DISCONNECTED')
  })

})

http.listen(3000, () => {
  console.log('READY ON http://localhost:3000')
})