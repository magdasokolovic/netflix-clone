const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serieSchema = new Schema({
  name : {type : String},
  overview : String,
  languages : [ String ],
  seasons : [ {} ],
  image : String,
  number_of_seasons : Number
});

const Series = mongoose.model("serie", serieSchema);

module.exports = {Series};
