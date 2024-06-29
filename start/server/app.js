const express = require("express");
require("../persistence/connection");

const { PORT } = require("../config");
const expressApp = require("./express-app");

const StartServer = async () => {
  const app = express();

  await expressApp(app);

  app
    .listen(PORT || 3000, () => {
      console.log(` app listening on port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
