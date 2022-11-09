import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FormTitle from './FormTitle';

function GridFormTemplate(props) {
    return (
        <Box sx={{ mb: 13 }}>
            <FormTitle>{props.title}</FormTitle>
            <Grid container spacing={3}>
                {props.children}
            </Grid>
        </Box>
    )
}

GridFormTemplate.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default GridFormTemplate;