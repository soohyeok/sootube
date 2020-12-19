const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(4000, console.log(`Listening to http://localhost:4000`))