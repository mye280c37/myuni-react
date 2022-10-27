import * as React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
    return (
        <img className="image" style={props.style} alt="entire_diagram" src={props.src} />
    )
}

Image.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    alt: PropTypes.string,
    src: PropTypes.string.isRequired
}

Image.defaultProps = {
    style: { width: "100%", padding: 2 }
}

export default Image;