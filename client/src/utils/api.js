import axios from "axios";

export default {
  getMovies: function() {
    return axios.get("/api/movies");
  },
  
  getMovie: function(id) {
    return axios.get("/api/movies/" + id);
  },
  
  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  
  saveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  }
};