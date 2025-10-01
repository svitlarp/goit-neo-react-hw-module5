import ErrorMessage from "../error/ErrorMessage";
import Loader from "../loader/Loader";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

// TODO: useLocation
const MovieList = ({ movieList, loading, error }) => {
  return (
    <div className={css.movieList}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movieList.length === 0 && <ErrorMessage />}
      {movieList.length > 0 && (
        <ul>
          {movieList.map((item) => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
