const axios = require("axios");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const { Series } = require("../src/models");
const api_key = "a815bbb393e7f79ac4b0c66acd437aa6";
const base_url = "https://api.themoviedb.org/3";

let tvID = null;

const all_tv_url = `https://api.themoviedb.org/3/tv/changes?api_key=a815bbb393e7f79ac4b0c66acd437aa6&page=1`;
const tvID_url = `${base_url}/tv/${tvID}?api_key=${api_key}&language=en-US`;
const img_url = "https://image.tmdb.org/t/p/w500";

async function getData() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const response = await axios(all_tv_url);
    const data = await response.data.results;
    // console.log(data);
    let i = 0;
    let y = 0;
    let sortData = [];
    while (i < 150) {
      console.log(data[i]);
      y++;
      if (data[y].adult === false) {
        i++;
        sortData.push(data[i]);
      }
    }
    // console.log(sortData);
    for (let z = 0; z < sortData.length; z++) {
      let tv = sortData[z];
      const detail_tv_url = `${base_url}/tv/${tv.id}?api_key=${api_key}&language=en-US`;
      try {
        const detailTV = await axios(detail_tv_url);

        let tvShow = detailTV.data;
        // console.log(tvShow);
        if (!tvShow.poster_path || tvShow.vote_count <= 50) continue;
        const {
          name,
          languages,
          overview,
          seasons,
          number_of_seasons,
          vote_average,
          vote_count,
          poster_path
        } = tvShow;

        let tempSeasons = [];

        for (const season of seasons) {
          const episode_url = `https://api.themoviedb.org/3/tv/${tv.id}/season/${season.season_number}?api_key=a815bbb393e7f79ac4b0c66acd437aa6&language=en-US`;
          let tempEpisodes = [];
          try {
            const allEpisodes = await axios(episode_url);
            for (const ep of allEpisodes.data.episodes) {
              if (!ep.still_path) continue;
              tempEpisodes.push({
                image: img_url + ep.still_path,
                name: ep.name,
                overview: !!ep.overview ? ep.overview : season.overview
              });
            }
          } catch (error) {
            console.log(error);
          }
          tempSeasons.push(tempEpisodes);
          console.log(tempSeasons);
        }

        const serie = new Series({
          name,
          languages,
          overview,
          seasons: [...tempSeasons],
          image: img_url + poster_path,
          number_of_seasons,
          rating: vote_average,
          vote_count
        });
        await serie.save();
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
}

module.exports = { Series };

getData();
