const http = require('http');

const server = http.createServer((request, response) => {
  response.end('<html><body>Portal de notícias</body></html>');
})

server.listen(3333);