const express = require("express");
//const cluster = require("cluster");
//const os = require("os");
const fs = require("fs");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get("/", (req, res) => {
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,1,2,3,4].sort()
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Running server.js...");
/*
if (cluster.isMaster) {
  console.log("Master has been started...");
  const NUM_WORKERS = os.cpus().length;
  console.log(`Master has started ${NUM_WORKERS} workers...`);
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");
  app.listen(3000);
}
*/
app.listen(3000);

// pm2 start server.js -i max

setInterval(() => {
  const msg = `Ore ${new Date().toLocaleTimeString()} process ${process.pid}\n`;
  fs.appendFileSync("./log.txt", msg);
}, 2000);
