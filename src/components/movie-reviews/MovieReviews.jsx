import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesReviews } from "../../api/api";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(id)
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!reviews.length) return <p>We don't have any reviews for the moment</p>;

  return (
    <div>
      <ul className={css.reviews}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewItem}>
            <span className={css.reviewAuthor}>Author: {review.author}</span>
            <div>`{review.content}`</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
