import { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails, checkImages } from "components/services/fetchMovies";
import { toastError } from "components/services/toasts";
import { ProgressBar } from "react-loader-spinner";
import { ProgressBarStyle } from "components/services/fetchMovies";
import { MovieDetailsMain, MovieDetailsMainWrapper, MovieDetailsInfoWrapper, MovieDetailsGenresList, MovieDetailsAdditionalWrapper, MovieDetailsAdditionalNavigate, NavTitle } from "./MovieDetails.styled";
import { NavButton } from "components/GlobalStyles";

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
        <MovieDetailsMain>
            <span style={{marginBottom: "26px"}}>
                <NavButton to={backLinkHref}>Go back</NavButton>
            </span>
            <MovieDetailsMainWrapper>
                <div>
                    <img src={imgForPoster} alt={title}/>
                </div>
                <MovieDetailsInfoWrapper>
                    <h2>{title} ({releaseDate})</h2>
                    <p>User score: {vote_average.toFixed(1)}</p>
                    <h3>Overview</h3>
                    <span>{overview}</span>
                    <h3>Genres</h3>
                    <MovieDetailsGenresList>
                        {genres.map(({ id, name }) => {
                            return (
                                <li key={id}>{name}</li>
                            );
                        })}
                    </MovieDetailsGenresList>
                </MovieDetailsInfoWrapper>
            </MovieDetailsMainWrapper>
            <MovieDetailsAdditionalWrapper>
                <h3>Additional information</h3>
                <MovieDetailsAdditionalNavigate>
                    <li>
                        <NavTitle to="cast" state={{ from: location.state?.from }}>Cast</NavTitle>
                    </li>
                    <li>
                        <NavTitle to="reviews" state={{ from: location.state?.from }}>Reviews</NavTitle>
                    </li>
                </MovieDetailsAdditionalNavigate>
                <Suspense fallback={<ProgressBar {...ProgressBarStyle}/>}>
                    <Outlet context={movie} />
                </Suspense>
            </MovieDetailsAdditionalWrapper>
        </MovieDetailsMain>
    );
};