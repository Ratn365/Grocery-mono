const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // throw new Error("error");
  res.send("Hello World!");
});

app
  .listen(port, () => {
    console.log(` app listening on port ${port}`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
