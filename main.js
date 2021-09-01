const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("hello from Node Server");
});

app.get("/contact", (req, res, next) => {
  res.send("contact");
});

app.get("aboutMain", (req, res, next) => {
  res.send("about Main");
});

app.listen(9000, () => {
  console.log("server is listening on 9000");
});
