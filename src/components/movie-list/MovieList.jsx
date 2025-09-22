import css from './MovieList.module.css';
import { Link } from 'react-router-dom';


const MovieList = ({movieList}) => {
    return (
        <div className={css.movieList}>
            {movieList.length > 0 && (
                <ul>
                {movieList.map(item => (
                    <li key={item.id}>
                        <Link to={`/movies/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
                </ul>
            )}
            
        </div>
    )
}

export default MovieList;