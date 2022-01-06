const TIMEOUT = 5000;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encriptedData = encrypt(data);
  console.log(`Sending ${encriptedData} to ${url}`);
}

console.log("Module loaded");
//console.log(module);

module.exports = { send, TIMEOUT };
