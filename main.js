const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("hello from Node Server");
});

// app.get("/about", (req, res, next) => {
//   res.send("about myself");
// });

app.get("/contact", (req, res, next) => {
  res.send("contact");
});

app.listen(9000, () => {
  console.log("server is listening on 9000");
});
