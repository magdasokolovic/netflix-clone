const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
  name: { type: String },
  overview: String,
  languages: [String],
  seasons: [{}],
  image: String,
  number_of_seasons: Number
});

module.exports = mongoose.model("serie", SerieSchema);
