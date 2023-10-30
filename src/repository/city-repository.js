const { City } = require("../models/index");

class CityRepository {
  // creating a new city
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  // deleting a city
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  // get a particular city

  async getCity(cityId) {
    try {
      console.log(cityId);
      const city = await City.findAll({ where: { id: cityId } });
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  // update a city
  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, { where: { id: cityId } });
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  // fetch all cities
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CityRepository;
