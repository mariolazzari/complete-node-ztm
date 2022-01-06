import fetch from "node-fetch";

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff worked");
  } else {
    reject(Error("It broke"));
  }
});

console.log(promise);

promise
  .then(res => res + "!")
  .then(res2 => {
    throw Error("Something went wrong");
    console.log(res2);
  })
  .catch(err => console.log(err));

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(res => res.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(err => console.log(err));
