const http = require("http");

const server = http.createServer(function(req, res, next) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //sending some data to the client
    res.write("<h1>Hello World!</h1>");
    return res.end();
});

const port = 3000;

server.listen(port, function() {
    console.log(`Server is listening on port: ${port}`);
});