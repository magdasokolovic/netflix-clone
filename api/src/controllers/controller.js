require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");
const allSeries = `${process.env.BASE_URL}/tv/changes?api_key=${process.env.API_KEY}&page=1`;

class Controller {
  getAllSeries = async (req, res, next) => {
    try {
    } catch (error) {
      next();
    }
  };
}
