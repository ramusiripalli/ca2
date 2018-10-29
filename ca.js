const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   console.log('say good evening for five times');

   setTimeout(function() {
      socket.send('Good Evening');
   }, 2000);

   
});

http.listen(3000);

