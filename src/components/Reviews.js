export const Reviews = ({ data: { total_results, results } }) => {
    if (!total_results || !results) {
        return;
    }

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