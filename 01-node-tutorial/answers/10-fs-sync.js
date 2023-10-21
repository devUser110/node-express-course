const { readFileSync, writeFileSync } = require("fs");

console.log("start");

writeFileSync(
  "./temporary/fileA.txt",
  "Adding Line 1\nAdding Line 2\nAdding Line 3",
  { flag: "a" }
);

const result = readFileSync("./temporary/fileA.txt", "utf8");

console.log(result);
console.log("done with this task");
console.log("starting the next one");
