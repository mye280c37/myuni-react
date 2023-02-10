import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const titleStyle = {
    mt: 8,
    mb: 2
};

const subBoxStyle = {
    mb: 4
};

function SubSectionBox(props) {
    return (
        <Box sx={subBoxStyle}>
            <Typography variant='h5' sx={titleStyle}>{props.title}</Typography>
            <Typography variant='body2' sx={{ mb: 2 }} color='text.secondary'>{props.secondary}</Typography> 
            {props.children}
        </Box>
    );
};

SubSectionBox.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    secondary: PropTypes.string
};

export default SubSectionBox;