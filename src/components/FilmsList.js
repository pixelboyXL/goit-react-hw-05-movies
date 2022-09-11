import { NavLink, useLocation } from "react-router-dom";
import { checkImages } from "components/services/fetchMovies";

export const FilmsList = ({ data }) => {
    const location = useLocation();

    return (
        <section>
            <ul>
                {data.map(({ id, title, poster_path }) => {
                    const imgForPoster = checkImages("poster", poster_path);
                    return (
                        <li key={id}>
                            <NavLink to={`/movies/${id}`} state={{from: location}}>
                                <div>
                                    <img src={imgForPoster} alt={title} />
                                    <p>{title}</p>
                                </div>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};