const mongoose = require('mongoose');
const axios = require('axios');
const mongo_url = `mongodb+srv://user-123:VBEw3WEf7dZMgCF@chitran.ehmoy.mongodb.net/myUsersDatabase?retryWrites=true&w=majority`;
const api_key = '50e7716998c5966febc04df6b85c9b6c';
const base_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w500';
const serieSchema = new mongoose.Schema({
  name: { type: String },
  overview: String,
  languages: [String],
  seasons: [{}],
  image: String,
  number_of_seasons: Number,
});
const Series = mongoose.model('serie', serieSchema);
const all_tv_url = `https://api.themoviedb.org/3/tv/changes?api_key=a815bbb393e7f79ac4b0c66acd437aa6&page=1`;

async function getData() {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const response = await axios.get(all_tv_url);
    const data = await response.data.results;
    console.log(data);
    data.slice(200, 210).forEach(async (tv, i) => {
      //   console.log(tv);
      const detail_tv_url = `${base_url}/tv/${tv.id}?api_key=${api_key}&language=en-US`;
      try {
        const detailTV = await axios.get(detail_tv_url);
        // console.log(detailTV);
        let tvShow = detailTV.data;
        const {
          name,
          languages,
          overview,
          seasons,
          number_of_seasons,
          poster_path,
        } = tvShow;
        let tempSeasons = [];
        // console.log(seasons);
        // seasons.forEach(async (season, i) =>
        for (const season of seasons) {
          const episode_url = `https://api.themoviedb.org/3/tv/${tv.id}/season/${season.season_number}?api_key=a815bbb393e7f79ac4b0c66acd437aa6&language=en-US`;
          let tempEpisodes = [];
          try {
            const allEpisodes = await axios.get(episode_url);
            // console.log(allEpisodes);
            // allEpisodes.data.episodes.forEach((ep) =>
            for (const ep of allEpisodes.data.episodes) {
              tempEpisodes.push({
                name: ep.name,
                overview: !!ep.overview ? ep.overview : season.overview,
                image: img_url + ep.still_path,
              });
              console.log('chay truoc');
            }
          } catch (error) {
            console.log(error);
          }
          tempSeasons.push(tempEpisodes);
        }
        console.log(tempSeasons);
        const serie = new Series({
          name,
          languages,
          overview,
          seasons: [...tempSeasons],
          number_of_seasons,
          image: img_url + poster_path,
        });
        console.log(serie);
        await serie.save();
      } catch (error) {
        console.log(error);
      }
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
