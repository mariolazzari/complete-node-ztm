const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const PORT = 3000;

const app = express();
app.use(helmet());

app.get("/", (req, res) => {
  const index = path.join(__dirname, "public", "index.html");
  res.sendFile(index);
});

app.get("/secret", (req, res) => {
  res.send("Your personale secret value is 42");
});

/*
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/

// openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
https
  .createServer(
    {
      key: fs.readFileSync("cert/key.pem"),
      cert: fs.readFileSync("cert/cert.pem"),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
