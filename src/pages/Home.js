import { useState, useEffect } from "react";
import { getTrending } from "components/services/fetchMovies";
import { FilmsList } from "components/FilmsList";
import { toastError } from "components/services/toasts";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            getTrending().then(data => setMovies(data.results));
        } catch (error) {
            toastError();
        };
    }, []);
    
    return (
        <FilmsList data={movies} />
    );
};