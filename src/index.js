const express = require("express");
const { PORT } = "./config/ServerConfig.js";
const bodyParser = require("body-parser");

const getStarted = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("server is running");
  });
};

getStarted();
