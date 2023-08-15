import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function FormTitle(props) {
    return (
        <Typography variant="h6" sx={props.sx} gutterBottom>
            {props.children}
        </Typography>
    )
}

FormTitle.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};

export default FormTitle;