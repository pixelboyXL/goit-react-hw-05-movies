import { useOutletContext } from "react-router-dom";
import { ReviewsList } from "./Reviews.styled";

export const Reviews = () => {
    const data = useOutletContext();

    const { total_results, results } = data.reviews;

    return (
        <>
            {total_results !== 0
                ? <ReviewsList>
                    {results.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <p>Author: {author}</p>
                                <span>{content}</span>
                            </li>
                        );
                    })}
                </ReviewsList>
                : <p>Sorry, we don`t have any reviews for this movie</p>}
        </>
    );
};