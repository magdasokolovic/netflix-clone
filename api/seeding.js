const axios = require("axios");

const mongoose = require("mongoose");
require("dotenv").config();

const api_key = "a815bbb393e7f79ac4b0c66acd437aa6";
const base_url = "https://api.themoviedb.org/3";

let tvID = null;

const all_tv_url = `https://api.themoviedb.org/3/tv/changes?api_key=a815bbb393e7f79ac4b0c66acd437aa6&page=1`;
const tvID_url = `${base_url}/tv/${tvID}?api_key=${api_key}&language=en-US`;

// const episodeSchema = new mongoose.Schema({
//   name: { type: String },
//   overview: String
// });

// const seasonSchema = new mongoose.Schema({
//   name: { type: String },
//   overview: String,
//   episodes: [episodeSchema]
// });

const serieSchema = new mongoose.Schema({
  name: { type: String },
  overview: String,
  languages: [String],
  seasons: [{}],
  rating: Number,
  vote_count: Number,
  number_of_seasons: Number
});

const Series = mongoose.model("serie", serieSchema);

async function getData() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const response = await axios(all_tv_url);
    const data = await response.data.results;

    data.slice(200, 210).forEach(async (tv, i) => {
      //   console.log(tv);

      const detail_tv_url = `${base_url}/tv/${tv.id}?api_key=${api_key}&language=en-US`;
      try {
        const detailTV = await axios(detail_tv_url);
        // console.log(detailTV);
        let tvShow = detailTV.data;
        console.log(tvShow);
        const {
          name,
          languages,
          overview,
          seasons,
          number_of_seasons,
          vote_average,
          vote_count
        } = tvShow;

        let tempSeasons = [];
        // console.log(seasons);
        // seasons.forEach(async (season, i) =>
        for (const season of seasons) {
          const episode_url = `https://api.themoviedb.org/3/tv/${tv.id}/season/${season.season_number}?api_key=a815bbb393e7f79ac4b0c66acd437aa6&language=en-US`;
          let tempEpisodes = [];
          try {
            const allEpisodes = await axios(episode_url);
            // console.log(allEpisodes);
            // allEpisodes.data.episodes.forEach((ep) =>

            for (const ep of allEpisodes.data.episodes) {
              tempEpisodes.push({
                name: ep.name,
                overview: !!ep.overview ? ep.overview : season.overview
              });
            }
          } catch (error) {
            console.log(error);
          }

          tempSeasons.push(tempEpisodes);
        }

        const serie = new Series({
          name,
          languages,
          overview,
          seasons: [...tempSeasons],
          number_of_seasons,
          rating: vote_average,
          vote_count
        });
        await serie.save();
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { Series };

getData();
