import express from "express";
import { PORT } from "./config/ServerConfig.js";
import bodyParser from "body-parser";

const getStarted = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log("server is running");
  });
};

getStarted();
