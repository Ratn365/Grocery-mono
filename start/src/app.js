const express = require("express");
require("./persistence/connection");
const { PORT } = require("./config");

const app = express();
app.get("/", (req, res) => {
  // throw new Error("error");
  res.send("Hello World!");
});

app
  .listen(PORT || 3000, () => {
    console.log(` app listening on port ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
