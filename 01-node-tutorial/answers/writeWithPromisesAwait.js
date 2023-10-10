const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile(
      "temp.txt",
      "Adding Line 1\nAdding Line 2\nAdding Line 3",
      { flag: "a" }
    );
  } catch {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log(data);
  } catch {
    console.log(error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch {
    console.log(error);
  }
};

readWrite();
