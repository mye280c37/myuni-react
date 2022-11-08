import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import BoxTitle from './BoxTitle';

function GridFormTemplate(props) {
    return (
        <React.Fragment>
            <BoxTitle>{props.title}</BoxTitle>
            <Grid container spacing={3}>
                {props.children}
            </Grid>
        </React.Fragment>
    )
}

GridFormTemplate.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default GridFormTemplate;