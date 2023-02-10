import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function Image(props) {
    return (
        <Box sx={{ pl: {sm: 10, md: 1}, pr: {sm: 10, md: 1}, pb : {sm: 5, md: 1} }}>
            <img className="image" style={props.style} alt="entire_diagram" src={props.src} />
        </Box>
    )
}

Image.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    alt: PropTypes.string,
    src: PropTypes.string.isRequired
}

Image.defaultProps = {
    style: { 
        'width': "100%", 
        'object-fit': 'contain' 
    }
}

export default Image;
