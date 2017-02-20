var fs = require('fs');
var http = require('http').createServer(handler)
var socketio = require('socket.io')(http, { wsEngine: 'uws' })

http.listen(3000, function(){
    console.log('Listening on Port 3000')
})

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}
