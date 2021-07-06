const {Series, Films} = require("../models");
const axios = require("axios");
const api_key = "a815bbb393e7f79ac4b0c66acd437aa6";
const base_url = "https://api.themoviedb.org/3";
// const latest_url =
// `${base_url}/movie/latest?api_key=${api_key}&language=en-US`; const
// popular_url =
// `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=10`; const
// toprated_url =
// `${base_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=10`;
// const upcoming_url =
// `${base_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=10`;
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
  // console.log("haha");
  Films.find({rating : {$gt : 6.7}}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    console.log(data);
    res.status(200).json(data);
  });
};
const getAllPopular = async (req, res) => {
  // console.log("haha");
  Films.find({rating : {$gt : 9}}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    console.log(data);
    res.status(200).json(data);
  });
};
const getAllTopRated = async (req, res) => {
  // console.log("haha");
  Films.find({rating : {$gt : 8}}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    console.log(data);
    res.status(200).json(data);
  });
};
const getAllUpcoming = async (req, res) => {
  // console.log("haha");
  Films.find({rating : {$gt : 7.7}}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    console.log(data);
    res.status(200).json(data);
  });
};
module.exports = {
  getAllSeries,
  getAllFilms,
  getAllLatest,
  getAllPopular,
  getAllTopRated,
  getAllUpcoming
};
