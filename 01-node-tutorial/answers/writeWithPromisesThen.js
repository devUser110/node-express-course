const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "This is the way. ")
  .then(() => {
    return writeFile("temp.txt", "Use the force. ", { flag: "a" });
  })
  .then(() => {
    return writeFile(
      "temp.txt",
      "No! Try not. Do. Or do not. There is no try.",
      { flag: "a" }
    );
  })
  .then(() => {
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
