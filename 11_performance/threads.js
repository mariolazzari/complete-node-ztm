const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  console.log("Main thread:", process.pid);
  new Worker(__filename, { workerData: [1, 10, 2, 9] });
  new Worker(__filename, { workerData: ["a", "z", "b", "y"] });
} else {
  console.log("Worker thread:", process.pid);
  console.log(
    "Sort:",
    workerData.sort((a, b) => a - b)
  );
}
