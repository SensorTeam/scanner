const e = require('express')
const p = require('path')
const a = e()

a.get('/', (req, res) => {
  res.sendFile(p.join(__dirname + '/index.html'))
})

a.listen(3000, () => {
  console.log('Listening on port 3000')
})