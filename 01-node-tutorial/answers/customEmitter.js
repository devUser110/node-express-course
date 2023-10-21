const EventEmitter = require("events");

const customEmitter = new EventEmitter();

const words = ["This", "is", "the", "way"];

for (const word of words) {
  customEmitter.on(word, () => {
    console.log(word);
  });
}

customEmitter.emit("This");
customEmitter.emit("is");
customEmitter.emit("the");
customEmitter.emit("way");
