const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      message: "Created a city",
      success: true,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create a city",
      error: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Deleted a city",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to delete a city",
      error: error,
    });
  }
};

// updating a city

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      message: "Updated a city",
      data: response,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update a city",
      error: error,
    });
  }
};

// fetching a city

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Fetched a city",
      data: city,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch a city",
      error: error,
    });
  }
};

module.exports = { create, destroy, update, get };
