
import PropTypes from 'prop-types';

// version == primary/secondary, pertaining to a classK
function Button({ children, version, type, isDisabled }) {

    return (
        <button type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
    version: 'primary',

}

Button.propTypes = {
    //PropTYpes.node => validator that ensures that props can be anything rendered by react, ie string, number, array, json, etc.
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button;