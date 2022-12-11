import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";

import BoxTitle from "../components/common/BoxTitle";

function ReviewDetail(props) {
    return (
        <Box sx={{ p: { xs: 5, sm: 7 }, minHeight: "800px" }}>
            <BoxTitle>{props.review.title}</BoxTitle>
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12} sx={{textAlign: 'left'}}>작성자: {props.review.author}</Grid>
                <Grid item sm={6} xs={12} sx={{textAlign: 'left'}}>상담 날짜: {props.review.consultingTime}</Grid>
            </Grid>
            <Typography variant="body1" sx={{ pt: 10, textAlign: 'left' }}>
                {props.review.body}
            </Typography>
        </Box>
    );
}

ReviewDetail.propTypes = {
    review: PropTypes.object.isRequired
}

export default ReviewDetail;