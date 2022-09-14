import PropTypes from 'prop-types';
import { ErrorSection } from './GlobalStyles';

export const Error = ({ errorImg, children }) => {
    return (
        <ErrorSection>
            <img src={errorImg} alt="Wow dude, try one more time" />
            {children}
        </ErrorSection>
    );
};

Error.propTypes = {
    errorImg: PropTypes.string.isRequired,
};