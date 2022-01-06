const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 500);
const c = () => promisify("c", 300);
const promises = [a(), b(), c()];

// parallel execution
const parallel = async () => {
  const [res1, res2, res3] = await Promise.all(promises);
  return `Parallel done: ${res1}, ${res2}, ${res3}`;
};

// race execution
const race = async () => {
  const res = await Promise.race(promises);
  return `Race done: ${res}`;
};

// sequential execution
const sequence = async () => {
  const res1 = await a();
  const res2 = await b();
  const res3 = await c();

  return `Sequencel done: ${res1}, ${res2}, ${res3}`;
};

parallel().then(console.log);
race().then(console.log);
sequence().then(console.log);

// all settled
const promise1 = new Promise((resolve, _reject) =>
  setTimeout(resolve, 1000, "done")
);
const promise2 = new Promise((_resolve, reject) =>
  setTimeout(reject, 1000, "error")
);

Promise.allSettled([promise1, promise2]).then(console.log).catch(console.log);
