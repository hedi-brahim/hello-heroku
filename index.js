const http = require("http");

const port = "3000";
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content_Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`the server is run at http://${hostname}:${port}/`);
});
