const express = require('express')
const app = express()
const port = 3000

//use morgan to watch http request on terminal of VS
var morgan = require('morgan')

app.use(morgan('combined'))

//route 
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})