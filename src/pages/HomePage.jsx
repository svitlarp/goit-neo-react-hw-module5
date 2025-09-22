import { useEffect, useState } from 'react';
import MovieList from '../components/movie-list/MovieList';
import {fetchMovies} from '../api/api.jsx';


const HomePage = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetchMovies()
            .then(data => {
                setTrending(data)
            })
        .catch((err) => console.log(err))
        }, [])

    return (
        <>
            <h1>HomePage</h1>
            <MovieList movieList={trending} />
        </>
    )
}

export default HomePage;

"https://localhost:5173/movies/:movieId"