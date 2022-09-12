import PropTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";
import { checkImages } from "components/services/fetchMovies";
import { FilmListStyled, FilmListDiv, FilmListTitle } from './FilmListStyled';

export const FilmsList = ({ data }) => {
    const location = useLocation();

    return (
        <section>
            <FilmListStyled>
                {data.map(({ id, title, poster_path }) => {
                    const imgForPoster = checkImages("poster", poster_path);
                    return (
                        <li key={id}>
                            <NavLink to={`/movies/${id}`} state={{from: location}}>
                                <FilmListDiv>
                                    <img src={imgForPoster} alt={title} />
                                    <FilmListTitle>{title}</FilmListTitle>
                                </FilmListDiv>
                            </NavLink>
                        </li>
                    );
                })}
            </FilmListStyled>
        </section>
    );
};

FilmsList.propTypes = {
    data: PropTypes.array.isRequired,
};