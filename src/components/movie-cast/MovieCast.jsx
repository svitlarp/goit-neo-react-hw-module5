import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesCredits } from "../../api/api";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(id)
      .then((data) => {
        setCredits(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!setCredits.length)
    return <p>We don't have any credits for the moment</p>;

  return (
    <div>
      <ul className={css.credits}>
        {credits.map((credit) => (
          <li key={credit.id} className={css.creditItem}>
            <img src={credit.profile_path} alt={credit.name} />
            <img
              src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
              alt={credit.name}
            />
            <div>{credit.name}</div>
            <div>{credit.character}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
