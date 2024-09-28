import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

function Header(props) {
    return (
        <>
            <div className="header">
                <h2>
                    {props.text}
                </h2>
            </div>
        </>
    );
}

Header.defaultProps = {
    text: "Practice app"
};

Header.propTypes = {
    text: PropTypes.string,
}
export default Header;