import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

// equal to addLitener
eventEmitter.on("start", () => {
  console.log("this is a start event");
});

eventEmitter.on("print", (string) => {
  console.log(`print string:${string}`);
});
// add before others events
eventEmitter.prependListener('first-event',cb)

eventEmitter.emit("start");
eventEmitter.emit("print", "the great Gatsby");

console.log(eventEmitter.eventNames());

eventEmitter.removeAllListeners();
