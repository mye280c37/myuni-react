import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CustomLink(props) {
    return (
        <Link 
            to={props.to}
            style = {{
                'text-decoration': 'none',
                'color': 'inherit'
            }}
        >
            {props.children}
        </Link>
    );
}

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default CustomLink;