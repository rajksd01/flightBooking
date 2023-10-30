const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/cityController");

router.post("/city", CityController.create);

router.get("/city/:id", CityController.getCity);

router.put("/city/:id", CityController.update);

router.delete("/city/:id", CityController.destroy);
router.get("/city", CityController.getAllCities);

module.exports = router;
