const express = require("express");
const bodyParser = require("body-parser");

// ______________________________________________________
const { PORT } = "./config/ServerConfig.js";
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("server is running");
    const CityRepo = new CityRepository();
    CityRepo.createCity({
      name: "Delhi",
    });
  });
};

setupAndStartServer();
