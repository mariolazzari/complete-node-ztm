import fetch from "node-fetch";

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

fetch(urls[0])
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

const fetchUsers = async () => {
  try {
    const res = await fetch(urls[0]);
    const users = await res.json();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};

fetchUsers();

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (error) {
    console.error(error);
  }
};

getData();
