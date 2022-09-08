import { checkImages } from "components/services/fetchMovies";

export const Cast = ({ data }) => {
    return (
        <section>
            <ul>
                {data.cast.map(({ id, name, profile_path, character }) => {
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