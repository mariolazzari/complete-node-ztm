const mission = process.argv[2] || "mission";

if (mission === "learn") {
  console.log("Time to write some Node code");
} else {
  console.log(`Is ${mission} a real mission?`);
}
