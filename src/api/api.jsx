import axios from 'axios';


const apiKey = import.meta.env.VITE_API_ACCSES_KEY;

const url = 'https://api.themoviedb.org/3/trending/movie/day';
    const options = {
        headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json',
        }
};
    

export async function fetchMovies() {
            try {
                const res = await axios.get(url, options);
                console.log(res.data.results);
                return res.data.results;
            } catch (err) {
                console.error(err);
            }
        }
    