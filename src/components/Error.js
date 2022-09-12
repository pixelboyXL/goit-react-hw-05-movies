import PropTypes from 'prop-types';

export const Error = ({ errorImg, children }) => {
    return (
        <section>
            <img src={errorImg} alt="Wow dude, try one more time" />
            {children}
        </section>
    );
};

Error.propTypes = {
    errorImg: PropTypes.string.isRequired,
};