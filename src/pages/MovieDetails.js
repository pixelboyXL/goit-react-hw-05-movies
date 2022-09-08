import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCast, getMovieReviews, checkImages } from "components/services/fetchMovies";
import { Cast } from "components/Cast";
import { Reviews } from "components/Reviews";

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);
    const [castMember, setCastMember] = useState(null);
    const [reviewData, setReviewData] = useState(null);

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) {
        return null;
    };

    const { poster_path, title, vote_average, overview, genres } = movie;

    const imgForPoster = checkImages("poster", poster_path);

    return (
        <main>
            <section>
                <div>
                    <h2>{title}</h2>
                    <img src={imgForPoster} alt={title} />
                    <p>User score: {vote_average}</p>
                    <p><b>Overview</b></p>
                    <span>{overview}</span>
                    <p><b>Genres</b></p>
                    {genres.map(({id, name}) => {
                        return (
                            <span key={id}>{name}</span>
                        );
                    })}
                </div>
            </section>
            <section>
                <p><b>Additional information</b></p>
                <ul>
                    <li>
                        <button type="button" onClick={() => getMovieCast(movieId).then(setCastMember)}>Cast</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => getMovieReviews(movieId).then(setReviewData)}>Reviews</button>
                    </li>
                </ul>
                {castMember !== null
                    && <Cast data={castMember} />}
                {reviewData !== null
                    && <Reviews data={reviewData} />}
            </section>
        </main>
    );
};