import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesCredits } from "../../api/api";
import Loader from "../loader/Loader";
import ErrorMessage from "../error/ErrorMessage";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchMoviesCredits(id)
      .then((data) => setCredits(data ?? []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  if (!credits.length)
    return <p>We don't have any credits for the moment</p>;

  return (
    <ul className={css.credits}>
      {credits.map((credit) => (
        <li key={credit.id} className={css.creditItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
            alt={credit.name}
          />
          <div>{credit.name}</div>
          <div>{credit.character}</div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
