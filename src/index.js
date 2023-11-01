const express = require("express");
const bodyParser = require("body-parser");

// ______________________________________________________
const { PORT } = "./config/ServerConfig.js";
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send("Connection established ");
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(3003, async () => {
    console.log(process.env);
    console.log(PORT);
    console.log("server is running");
  });
};

setupAndStartServer();
