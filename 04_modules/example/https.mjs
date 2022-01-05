import { send } from "./request.js";
import { read } from "./response.js";
// import { TIMEOUT } from "./request.js";
import axios from "axios";

function request(url, data) {
  send(url, data);
  return read();
}

const res = request("http://www.google.com", "data");
console.log(res);

axios
  .get("https://www.google.com")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .then(() => {
    console.log("Request finished");
  });
