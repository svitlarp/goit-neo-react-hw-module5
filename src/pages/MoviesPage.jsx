import { useState, useEffect } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import { fetchMoviesByQuery } from "../api/api";
import MovieList from "../components/movie-list/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";
  const [inputValue, setInputValue] = useState(query);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputValue from onSubmit", inputValue);

    const newSearch = new URLSearchParams();
    newSearch.set("query", inputValue);
    setParams(newSearch);
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    fetchMoviesByQuery(query)
      .then((data) => {
        setList(data.results);
      })
      // .catch((err) => console.log(err))
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, [inputValue]);

  return (
    <>
      <h4>MoviesPage</h4>
      <SearchBar
        value={inputValue}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />
      {inputValue && (
        <MovieList movieList={list} loading={loading} error={error} />
      )}
    </>
  );
};

export default MoviesPage;
