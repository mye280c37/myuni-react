import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";

import FormTitle from "./FormTitle";

const boxStyle = {
    'mb': 5,
};

const contentsStyle = {
    'mt' : 1.5,
    'textAlign': 'left',
};

const textStyle = {
    'textAlign': 'left',
};

function ConsultingRequestDetail(props) {
    const consultingRequest = props.data.origin;
    return (
        <Box sx={{ p: { xs: 5, sm: 7 }, minHeight: "800px" }}>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>기본 정보</FormTitle>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} sx={textStyle}>이름: {consultingRequest.user.name}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>성별: {consultingRequest.user.sex=="w"?"여성":"남성"}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>나이: {consultingRequest.user.age}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>전화번호: {consultingRequest.user.phone}</Grid>
                </Grid>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>컨설팅 선택 옵션</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.consultingOption.join(", ")}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>지원 전형</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.applicationType.join(", ")}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>지원 전형 선택 이유</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.reason}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>희망 컨설팅 날짜</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.desiredDate}
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>과목별 점수 및 평균</FormTitle>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} sx={textStyle}>국어: {consultingRequest.score.korean}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>영어: {consultingRequest.score.english}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>수학: {consultingRequest.score.math}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>사회: {consultingRequest.score.society}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>과학: {consultingRequest.score.science}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>한국사: {consultingRequest.score.history}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>선택: {consultingRequest.score.optional}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>평균: {consultingRequest.score.average}</Grid>
                </Grid>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>지망 학교 및 학과</FormTitle>
                {consultingRequest.uni.
                }
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} sx={textStyle}>국어: {consultingRequest.score.korean}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>영어: {consultingRequest.score.english}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>수학: {consultingRequest.score.math}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>사회: {consultingRequest.score.society}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>과학: {consultingRequest.score.science}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>한국사: {consultingRequest.score.history}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>선택: {consultingRequest.score.optional}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>평균: {consultingRequest.score.average}</Grid>
                </Grid>
            </Box>
        </Box>
    );
}

ConsultingRequestDetail.propTypes = {
    data: PropTypes.object.isRequired
}

export default ConsultingRequestDetail;