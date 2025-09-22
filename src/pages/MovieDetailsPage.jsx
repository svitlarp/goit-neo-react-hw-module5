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
        <>
          <p>{movie.tagline}</p>
          <p>{movie.id}</p>
        </>
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
