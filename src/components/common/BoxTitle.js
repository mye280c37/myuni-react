import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function BoxTitle(props) {
    return (
        <Typography variant='h4' sx={{ mt: 2, mb: 5 }}>
            {props.children}
        </Typography>
    )
}

BoxTitle.propTypes = {
    children: PropTypes.node,
};

export default BoxTitle;