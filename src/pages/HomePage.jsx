import { useEffect, useState } from "react";
import MovieList from "../components/movie-list/MovieList";
import { fetchMovies } from "../api/api.jsx";
import Loader from "../components/loader/Loader.jsx";
import ErrorMessage from "../components/error/ErrorMessage.jsx";

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchMovies()
      .then((data) => setTrending(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movieList={trending} />
    </>
  );
};

export default HomePage;