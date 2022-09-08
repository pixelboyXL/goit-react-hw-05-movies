import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getTrending, checkImages } from "components/services/fetchMovies";

export const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrending().then(data => setMovies(data.results));
    }, []);
    
    return (
        <main>
            <ul>
                {movies.map(({ id, title, poster_path }) => {
                    const imgForPoster = checkImages("poster", poster_path);
                    return (
                        <li key={id}>
                            <NavLink to={`/movies/${id}`}>
                                <div>
                                    <img src={imgForPoster} alt={title} />
                                    <p>{title}</p>
                                </div>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};