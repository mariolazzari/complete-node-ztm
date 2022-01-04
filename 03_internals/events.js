const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subcribed to the event obsverver 1
celebrity.on("race", result => {
  if (result === "won") {
    console.log("Congratulation! You are the best!");
  }
});

// subcribed to the event obsverver 2
celebrity.on("race", result => {
  if (result !== "won") {
    console.log("Bohhhhhhh!");
  }
});

// emit event with arg
celebrity.emit("race", "won");
celebrity.emit("race", "lost");

// porcess event
process.on("exit", code => console.log("Process exit with code:", code));
