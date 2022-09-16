import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { checkImages } from "components/services/fetchMovies";
import { FilmListSection, FilmListStyled, FilmListWrapper, FilmListTitle } from './FilmList.styled';

export const FilmsList = ({ data }) => {
    const location = useLocation();

    return (
        <FilmListSection>
            <FilmListStyled>
                {data.map(({ id, title, poster_path }) => {
                    const imgForPoster = checkImages("poster", poster_path);
                    return (
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{from: location}}>
                                <FilmListWrapper>
                                    <img src={imgForPoster} alt={title} />
                                    <FilmListTitle>{title}</FilmListTitle>
                                </FilmListWrapper>
                            </Link>
                        </li>
                    );
                })}
            </FilmListStyled>
        </FilmListSection>
    );
};

FilmsList.propTypes = {
    data: PropTypes.array.isRequired,
};