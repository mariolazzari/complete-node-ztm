function a() {
  console.log(42);
}
a();

const food = Deno.args[0] || "love";
if (food === "love") {
  console.log("Deno is born");
} else {
  console.log("Deno is not born");
}

// metrics
setTimeout(() => {
  console.log("check");
  console.log(Deno.metrics());
}, 1000);

// window obj
console.log(window);
