import { useOutletContext } from "react-router-dom";

export const Reviews = () => {
    const data = useOutletContext();

    const { total_results, results } = data.reviews;

    return (
        <section>
            {total_results !== 0
                ? <ul>
                    {results.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>
                                <span>{content}</span>
                            </li>
                        );
                    })}
                </ul>
                : <p>Sorry, we don`t have any reviews for this movie</p>}
        </section>
    );
};