import { useOutletContext } from "react-router-dom";
import { checkImages } from "components/services/fetchMovies";

export const Cast = () => {
    const data = useOutletContext();

    const { cast } = data.credits;

    return (
        <section>
            <ul>
                {cast.map(({ id, name, profile_path, character }) => {
                    const imgForProfile = checkImages("profile", profile_path);
                    return (
                        <li key={id}>
                            <div>
                                <img src={imgForProfile} alt={name} />
                                <p>{name}</p>
                                <p>Character: {character}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};