import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMoviesDetails } from "../api/api";
import { useState, useEffect, useRef } from "react";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/error/ErrorMessage";


const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchMoviesDetails(id)
      .then((data) => setMovie(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <Link to={backLinkRef.current ?? "/movies"}>Go back</Link>

      {loading && <Loader />}
      {error && <ErrorMessage />}

      <h4>MovieDetailsPage</h4>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h3>{movie.title}</h3>
            <h4>Overview:</h4>
            <p>{movie.overview}</p>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>

          <Outlet />
        </div>)}
    </div>
  )
}


export default MovieDetailsPage;
