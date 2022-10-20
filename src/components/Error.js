import PropTypes from 'prop-types';
import { ErrorSection } from './GlobalStyles';
import { NavButton } from "components/GlobalStyles";

export const Error = ({ errorImg, children }) => {
    return (
        <ErrorSection>
            <img src={errorImg} alt="Wow dude, try one more time" />
            {children}
            <NavButton to="/">Back to home</NavButton>
        </ErrorSection>
    );
};

Error.propTypes = {
    errorImg: PropTypes.string.isRequired,
};