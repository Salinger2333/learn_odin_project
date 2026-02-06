#!/usr/bin/env node
console.log("welcom");
console.log("shit"); // node --watch

const axios = require("axios");

axios
  .get("https://example.com/todos")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const https = require("https");
{
  const options = {
    hostname: "example.com",
    port: 443,
    path: "/todos",
    method: "GET",
  };
  const req = https.request(options, (res) => {
    console.log(`${res.statusCode}`);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}

{
  const data = JSON.stringify({
    todo: "Buy milk",
  });

  const options = {
    hostname: "milk.com",
    port: 443,
    path: "/todos",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };
  const req = https.request(options, (res) => {
    console.log(res.statusCode);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}
