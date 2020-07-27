const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hi Team, How are you?');
}

const server = http.createServer(requestListener);
server.listen(8080);