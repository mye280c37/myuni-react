import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function ImportantBox(props) {
    return (
        <Box sx={{ borderRadius: 5, p: 3, mb: 2, backgroundColor: '#e9e9e9' }}>
            {props.children}
        </Box>
    );
}

ImportantBox.propTypes = {
    children: PropTypes.node.isRequired
};

export default ImportantBox;