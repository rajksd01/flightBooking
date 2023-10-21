const express = require("express");
const bodyParser = require("body-parser");

// ______________________________________________________
const { PORT } = "./config/ServerConfig.js";

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log("server is running");
  });
};

setupAndStartServer();
