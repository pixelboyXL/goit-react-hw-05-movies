import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails, checkImages } from "components/services/fetchMovies";
import { toastError } from "components/services/toasts";

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        try {
            getMovieDetails(movieId).then(setMovie);
        } catch (error) {
            toastError();
        };
    }, [movieId]);

    if (!movie) {
        return null;
    };

    const { poster_path, title, vote_average, overview, genres, release_date } = movie;
    const imgForPoster = checkImages("poster", poster_path);
    const releaseDate = new Date(release_date).getFullYear();
    const backLinkHref = location.state?.from ?? '/movies';

    return (
        <main>
            <section>
                <NavLink to={backLinkHref}>Go back</NavLink>
                <div>
                    <h2>{title} ({releaseDate})</h2>
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
                        <NavLink to="cast" state={{ from: location.state?.from }}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews" state={{ from: location.state?.from }}>Reviews</NavLink>
                    </li>
                </ul>
                <Outlet context={movie} />
            </section>
        </main>
    );
};