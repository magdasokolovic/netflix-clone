const mongoose = require("mongoose");
const axios = require("axios");
const path = require("path");

require("dotenv").config();
const {Films} = require("../src/models");
const api_key = "a815bbb393e7f79ac4b0c66acd437aa6";
const base_url = "https://api.themoviedb.org/3";

const films_url = `${base_url}/movie/changes?api_key=${api_key}&page=1`;

async function getData() {
  try {
    await mongoose.connect(process.env.MONGO_URL,
                           {useNewUrlParser : true, useUnifiedTopology : true});
    const response = await axios(films_url);
    // console.log(response);
    const data = await response.data.results.slice(1, 10);
    // console.log(data);
    for (const film of data) {
      const detail_movies =
          `${base_url}/movie/${film.id}?api_key=${api_key}&language=en-US`;
      try {
        const res = await axios(detail_movies);
        const movie = res.data;

        const {
          original_title,
          original_language,
          overview,
          backdrop_path,
          vote_average,
          vote_count
        } = movie;
        const film = new Films({
          name : original_title,
          overview,
          languages : original_language,
          image : backdrop_path,
          rating : vote_average,
          vote_count
        });
        await film.save();
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {Films};

getData();
