import axios from "axios";
import { key } from "../config.js";
import store from "../store";

export function loadMyMovieList() {
  axios
    .get("/movies")
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(movies => store.dispatch(myMovieListLoaded(movies)))
    .catch(error => console.error(error));
  return {
    type: "LOAD_MY_MOVIE_LIST"
  };
}

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
}

export function loadSearch(searchTerm) {
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=${key}`
    )
    .then(response => {
      console.log(response);
      return response.data.results;
    })
    .then(movies => store.dispatch(searchLoaded(movies)))
    .catch(error => console.error(error));
  return {
    type: "LOAD_SEARCH"
  };
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
}

export function saveMyMovie(movie) {
  axios
    .post("/movies", movie)
    .then(response => console.log(response))
    .then(store.dispatch(loadMyMovieList()))
    .catch(error => console.error(error));
  return {
    type: "MOVIE_SAVED"
  };
}

export function removeMyMovie(id) {
  axios
    .delete(`/movies/${id}`)
    .then(response => console.log(response))
    .then(store.dispatch(loadMyMovieList()))
    .catch(error => console.error(error));
  return {
    type: "MOVIE_REMOVED"
  };
}
