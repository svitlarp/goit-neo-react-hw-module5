import ErrorMessage from "../error/ErrorMessage";
import Loader from "../loader/Loader";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";


const MovieList = ({ movieList, loading, error }) => {

  const location = useLocation();

  return (
    <div className={css.movieList}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && movieList.length === 0 && (<p>No movies found</p>)}
      {movieList.length > 0 && (
        <ul>
          {movieList.map((item) => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
