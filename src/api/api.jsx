import axios from "axios";

const apiKey = import.meta.env.VITE_API_ACCSES_KEY;

const url = "https://api.themoviedb.org/3/trending/movie/day";
const options = {
  headers: {
    Authorization: apiKey,
    "Content-Type": "application/json",
  },
};

export async function fetchMovies() {
  try {
    const res = await axios.get(url, options);
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMoviesDetails(id) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMoviesReviews(id) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      options
    );
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMoviesCredits(id) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    );
    console.log(res.data.cast);
    return res.data.cast;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMoviesByQuery(query, page = 1) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`,
      options
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
