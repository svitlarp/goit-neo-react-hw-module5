import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMoviesDetails } from "../api/api";
import { useState, useEffect } from "react";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesDetails(id)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h4>MovieDetailsPage</h4>
      {movie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
          <div>
            <h3>{movie.title}</h3>
            <h4>Overview:</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}

      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
