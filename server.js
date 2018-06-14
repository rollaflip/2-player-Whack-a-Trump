const path = require('path');
const express = require('express');
const app = express();
const socketio = require('socket.io');

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, function () {
    console.log(`Listening on http://localhost:${server.address().port}`);
});

const io = socketio(server);

io.on('connection', function(socket) {
    console.log('a new client has connected');
    console.log(socket.id)
    socket.on('disconnect', function(reason) {
        console.log(':( disconnected', reason)
    })
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});
