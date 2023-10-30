const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  // to connect with create city function in city repository
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log(error, "Error creating city at service layer ");
      throw error;
    }
  }

  // to delete a city in city repository
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(error, "error deleting a city at service layer");
      throw error;
    }
  }

  // to update a city

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log(error, "Error updating city at service layer");
      throw error;
    }
  }

  // to get a particular city
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log(error, "error getting city at service layer");
      throw error;
    }
  }

  // to get all cities
  async getAllCities() {
    try {
      const cities = await this.getAllCities();
      return cities;
    } catch (error) {
      console.log(error, "error getting all cities at service layer");
      throw error;
    }
  }
}
module.exports = CityService;
