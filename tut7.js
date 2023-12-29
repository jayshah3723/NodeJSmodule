const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>Code with Jay</h1>");
resp.end();
}).listen(4500);