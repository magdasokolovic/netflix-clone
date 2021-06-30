require("dotenv").config();
const axios = require("axios");
const mongoose = require("mongoose");
const allSeries = `${process.env.BASE_URL}/tv/changes?api_key=${process.env.API_KEY}&page=1`;
//https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=<<api_key>>&language=en-US
class Controller {
  getAllSeries = async (req, res, next) => {
    try {
      const response = await axios.get(allSeries);
      const data = await response.data.results;
      //Get 10 series with tv_id
      data.slice(10, 20).forEach(async (tv, index) => {
        try {
          const series_url = `${process.env.BASE_URL}/tv/${tv.id}?api_key=${process.env.API_KEY}&language=en-US`;
          //Loop through each tv_id to get each serie's detail
          const serie_response = await axios.get(series_url);
          const serie_detail = serie_response.data.seasons;
          console.log(serie_detail);

          for (const serie of serie_detail) {
            const season_url = `${process.env.BASE_URL}/tv/${tv.id}/season/1?api_key=${process.env.API_KEY}&language=en-US`;

            try {
              const x = await axios.get(season_url);
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      });
      res.send("Hello");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = new Controller();
