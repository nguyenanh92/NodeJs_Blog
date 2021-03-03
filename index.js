const express = require('express')
const app = express()
const port = 3000

app.get('/', (req ,res) => {
  return res.send('Hello')
})

app.listen(port, () => console.log(`Run : http://localhost:${port}`))