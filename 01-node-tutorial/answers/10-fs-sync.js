const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./temporary/first.txt");
const second = readFileSync("./temporary/second.txt");

writeFileSync(
  "./temporary/fileA.txt",
  `Adding content to the files : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
