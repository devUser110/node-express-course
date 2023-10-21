const { createReadStream } = require("fs");

function streamCount(num) {
  let counter = 0;

  const readStream = createReadStream("../content/big.txt", {
    encoding: "utf8",
    highWaterMark: num,
  });

  readStream.on("data", (chunk) => {
    counter++;
    console.log(chunk);
  });

  readStream.on("end", () => {
    console.log(`Received a total of ${counter} chunks.`);
  });

  readStream.on("error", (err) => {
    console.log(err);
  });
}

console.log("HighWaterMark equals 200");
streamCount(200);

// console.log("HighWaterMark equals 400");
// streamCount(400);

// console.log("HighWaterMark equals 600");
// streamCount(600);

// console.log("HighWaterMark equals 800");
// streamCount(800);

// console.log("HighWaterMark equals 1000");
// streamCount(1000);
