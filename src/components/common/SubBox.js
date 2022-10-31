import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import BoxTitle from './BoxTitle';

function SubBox(props) {
    return (
        <Box sx={{ textAlign: 'left ', mt: 7}}>
            <BoxTitle>{props.title}</BoxTitle>
            {props.children}
        </Box>
    )
}

SubBox.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default SubBox;