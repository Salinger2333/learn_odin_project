import { fileURLToPath } from "node:url";
// import 后, 识别为ESM, 没有__dirname或者__filename
const myURL = new URL("https://example.org:3000/foo#bar");
console.log(myURL.hash);
myURL.hash = "shit";
console.log(myURL.hash);

console.log(myURL.host);
console.log(myURL.hostname);

console.log(myURL.href);

myURL.pathname = "ab/cd";
console.log(myURL.pathname);

console.log(myURL.port);
// default prots will transformed to empty string
myURL.port = 443;
console.log("port:" + myURL.port);
console.log("protocol:" + myURL.protocol);

myURL.search = "?123";
console.log("search:" + myURL.href);
myURL.search = "abc=xyz";
console.log("search:" + myURL.href);

const __filename = fileURLToPath(import.meta.url);
console.log(fileURLToPath(new URL("file:///hello world")));
