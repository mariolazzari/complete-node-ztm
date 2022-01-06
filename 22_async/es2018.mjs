import fetch from "node-fetch";

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// object spread
const animals = {
  tiger: "삐빅",
  lion: "사자",
  monkey: "원숭이",
  dog: "개",
};

const { tiger, lion, ...rest } = animals;
console.log(rest);

// finally
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
  } finally {
    console.log("finally");
  }
};

getData();

// for await of
const getData2 = async () => {
  const promises = urls.map(url => fetch(url));
  for await (let res of promises) {
    const data = await res.json();
    console.log(data);
  }
};

getData2();
