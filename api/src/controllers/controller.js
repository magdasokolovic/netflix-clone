const { Series, Films } = require("../models");
const axios = require("axios");
const api_key = "a815bbb393e7f79ac4b0c66acd437aa6";
const base_url = "https://api.themoviedb.org/3";
const latest_url = `${base_url}/movie/latest?api_key=${api_key}&language=en-US
`;
const getAllSeries = (req, res) => {
  Series.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  });
};
const getAllFilms = (req, res) => {
  Films.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  });
};
const getAllLatest = async (req, res) => {
  console.log("haha");
  try {
    const response = await axios.get(latest_url);
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { getAllSeries, getAllFilms, getAllLatest };
