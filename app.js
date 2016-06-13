var http = require('http');

function handleRequest(req, res){
  // console.log(req.url);
  // console.log(req.method);
  res.end('This is content!');
}
// function handles the request object and the response object
// browser makes the request to the http server


var server = http.createServer(handleRequest);
server.listen(3000);

// server is created and passed the handleRequest
// tells what port to listen on
