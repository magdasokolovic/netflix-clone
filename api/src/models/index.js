const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serieSchema = new Schema({
  name: { type: String },
  overview: String,
  languages: [String],
  seasons: [{}],
  image: String,
  number_of_seasons: Number,
  rating: Number,
  vote_count: Number,
});
const filmSchema = new Schema({
  name: { type: String },
  overview: String,
  languages: [String],
  image: String,
  rating: Number,
  vote_count: Number,
});

const Series = mongoose.model("serie", serieSchema);
const Films = mongoose.model("film", serieSchema);

module.exports = {
  Series,
  Films,
};
