// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

export const Error = ({ errorImg, errorMessage }) => {
    return (
        <section>
            <img src={errorImg} alt="Wow dude, try one more time" />
            <NavLink to="/">{errorMessage}</NavLink>
        </section>
    );
};

// ErrorImg.propTypes = {
//     errorImg: PropTypes.string.isRequired,
// };