import { useState, useEffect } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import { fetchMoviesByQuery } from "../api/api";
import MovieList from "../components/movie-list/MovieList";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    fetchMoviesByQuery(search)
      .then((data) => {
        setList(data.results);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <h4>MoviesPage</h4>
      <SearchBar onSearch={handleSearch} />
      {search && <MovieList movieList={list} />}
    </>
  );
};

export default MoviesPage;
