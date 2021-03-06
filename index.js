const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 9386
const mediaList = require('./media.json')

let mediaFiles = mediaList

app.use(express.static('media'))
app.use(express.static('public'))

/* this route is only for testing purpose */
app.get('/test', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/api/files', (req, res) => res.send(mediaFiles))
app.get('/bulma.min.css', (req, res) => res.sendFile(__dirname + '/node_modules/bulma/css/bulma.min.css'))

io.on('connection', function (socket) {
  socket.on('media play', function (data) {
    console.log(data)
    socket.broadcast.emit('media change', data)
  })
})

http.listen(port, () => console.log(`Listening on port ${port}`))