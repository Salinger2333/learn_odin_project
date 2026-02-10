import express from "express";
const app = express();

app
  .get("/", (req, res) => res.send("hello, world"))
  .get("/:username/messages/:messageId", (req, res) => {
    console.log(req.params);
    res.send(req.params);
    res.end();
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is start, listen to 3000 port");
});
