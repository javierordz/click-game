const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Movies collection and inserts the movies below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseDate: 1994
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseDate: 1972
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    releaseDate: 2008
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    releaseDate: 2003
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseDate: 1994
  },
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    releaseDate: 1957
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseDate: 2010
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    releaseDate: 1999
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    releaseDate: 1994
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    releaseDate: 2001
  },
  {
    title: "The Good, The Bad and the Ugly",
    director: "Sergio Leone",
    releaseDate: 1966
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    releaseDate: 2002
  },
  {
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    releaseDate: 2019
  },
  {
    title: "The Matrix",
    director: "Lana Wochowski, Lilly Wachowski",
    releaseDate: 1999
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    releaseDate: 1990
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    director: "Irvin Kershner",
    releaseDate: 1980
  }
];

db.Movie
  .remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });