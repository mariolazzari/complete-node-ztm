import { send } from "./request.js";
import { read } from "./response.js";
import { TIMEOUT } from "./request.js";

function request(url, data) {
  send(url, data);
  return read();
}

const res = request("http://www.google.com", "data");
console.log(res);
