import { useParams } from 'react-router-dom';


const MovieDetailsPage = () => {
    const params = useParams();
    console.log(params);

    return (
        <>
            <h4>MovieDetailsPage</h4>
            {/* <p>{item.title}</p>
            <p>{item.id}</p> */}
        </>
    )
}

export default MovieDetailsPage;