const e = require('express')
const a = e()

a.get('/', (req, res) => {
  res.send('Hello World!')
})

a.listen(3000, () => {
  console.log('Listening on port 3000')
})