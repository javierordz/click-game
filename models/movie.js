const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseYear: { type: Date, required: true }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;