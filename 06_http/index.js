const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  /*
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
  */
  const friend = { name: "John", age: 30 };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(friend));
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
