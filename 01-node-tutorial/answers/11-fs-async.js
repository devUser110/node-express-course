const { writeFile } = require("fs");

console.log("at start");

writeFile("./temporary/fileB.txt", "Adding Line 1\n", (err) => {
  console.log("at point 1");
  if (err) {
    console.log("Error at point 1: ", err);
  } else {
    writeFile(
      "./temporary/fileB.txt",
      "Adding Line 2\n",
      { flag: "a" },
      (err) => {
        console.log("at point 2");
        if (err) {
          console.log("Error at point 2: ", err);
        } else {
          writeFile(
            "./temporary/fileB.txt",
            "Adding Line 3\n",
            { flag: "a" },
            (err) => {
              console.log("at point 3");
              if (err) {
                console.log("Error at point 3: ", err);
              } else {
                console.log("All lines added.");
              }
            }
          );
        }
      }
    );
  }
});

console.log("at end");
