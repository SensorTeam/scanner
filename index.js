const fs = require('fs')
const op = {
  key: fs.readFileSync('cert/key.pem').toString(),
  cert: fs.readFileSync('cert/cert.pem').toString(),
  passphrase: fs.readFileSync('cert/pass.txt').toString().trim()
}

const app = require('express')()
const https = require('https').createServer(op, app)
const io = require('socket.io')(https)

const im = require('image-data-uri')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/w', (req, res) => {
  res.sendFile(__dirname + '/public/webcam.min.js')
})

app.get('/j', (req, res) => {
  res.sendFile(__dirname + '/public/jquery-1.11.1.js')
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

https.listen(3000, () => {
  console.log('SERVER READY ON http://localhost:3000')
  console.log('-------------------------------------')
})