const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./temporary/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error reading first file", err);
    return;
  }
  const first = result;
  readFile("./temporary/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("Error reading second file", err);
      return;
    }
    const second = result;
    writeFile(
      "./temporary/fileB.txt",
      `Writing the ${first} and ${second} files together`,
      (err, result) => {
        if (("Error writing fileB", err)) {
          console.log(err);
          return;
        }
        console.log("successfully merged files");
      }
    );
  });
});
console.log("starting the next task");
