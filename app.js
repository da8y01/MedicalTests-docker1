const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || 8080, function (err) {
  if (err) console.log('Error in server setup')
  console.log('Server listening...')
})
