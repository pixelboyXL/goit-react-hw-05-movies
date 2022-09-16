import { useOutletContext } from "react-router-dom";
import { checkImages } from "components/services/fetchMovies";
import { CastList } from "./Cast.styled";

export const Cast = () => {
    const data = useOutletContext();

    const { cast } = data.credits;

    console.log(cast);

    return (
        <>
            {cast.length !== 0
            ? <CastList>
                {cast.map(({ id, name, profile_path, character }) => {
                    const imgForProfile = checkImages("profile", profile_path);
                    return (
                        <li key={id}>
                            <div>
                                <img src={imgForProfile} alt={name} />
                                <p>{name}</p>
                                <span>Character: {character}</span>
                            </div>
                        </li>
                    );
                })}
                </CastList>
            : <p>Sorry, it seems that there is currently no information about the actors🙈</p>}
        </>
    );
};