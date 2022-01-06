// task queue
setTimeout(console.log, 0, "task queue1");
setTimeout(console.log, 10, "task queue2");

// micro task queue
Promise.resolve("promise").then(data => console.log("micro task queue", data));

console.log("main");
