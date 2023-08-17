import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

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

const gridContainerStyle = {
    'mb': 1,
    'textAlign': 'left',
};

function ConsultingRequestDetail(props) {
    const consultingRequest = props.data.origin;

    const universityList = () => {
        var arr = [];
        for(var priority in consultingRequest.uni) {
            const uni = consultingRequest.uni[priority];
            if(priority === "reason") continue;
            if(uni.university === "미정") {
                arr.push(
                    <Grid container spacing={2} sx={gridContainerStyle}>
                        <Grid item sm={4} xs={12} sx={textStyle}>{priority}지망</Grid>
                        <Grid item sm={8} xs={12} sx={textStyle}>미정</Grid>
                    </Grid>
                );
            }
            else {
                arr.push(
                    <Grid container spacing={2} sx={gridContainerStyle}>
                        <Grid item sm={4} xs={12} sx={textStyle}>{priority}지망</Grid>
                        <Grid item sm={8} xs={12} sx={textStyle}>{uni.university} {uni.major}</Grid>
                    </Grid>
                );
            }
        }
        return arr;
    }

    return (
        <Box sx={{ p: { xs: 5, sm: 7 }, height: '85%', overflowY: 'scroll' }}>
            <Box sx={boxStyle}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                    <Typography>미확인</Typography>
                    <Switch defaultChecked={consultingRequest.checked?true:false} onClick={()=>{console.log('hello')}}/>
                    <Typography>확인</Typography>
                </Stack>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>기본 정보</FormTitle>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} sx={textStyle}>이름: {consultingRequest.user.name}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>성별: {consultingRequest.user.sex==="w"?"여성":"남성"}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>나이: {consultingRequest.user.age}</Grid>
                    <Grid item sm={6} xs={12} sx={textStyle}>전화번호: {consultingRequest.user.phone}</Grid>
                </Grid>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>컨설팅 선택 옵션</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    <ul>
                        {consultingRequest.consultingOption.map((value)=>{
                            return <li>{value}</li>
                        })}
                    </ul>
                </Typography>
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>지원 전형</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    <ul>
                        {consultingRequest.applicationType.map((value)=>{
                            return <li>{value}</li>
                        })}
                    </ul>
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
                {universityList()}
            </Box>
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>학교 및 학과 선정 이유</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.uni.reason}
                </Typography>
            </Box>
            {Object.keys(consultingRequest).includes('additionalInfo')?
            consultingRequest.additionalInfo.map((item)=>{
                return (
                    <Box sx={boxStyle}>
                        <FormTitle sx={textStyle}>{item.header}</FormTitle>
                        <Typography variant="body1" sx={contentsStyle}>
                            {item.value}
                        </Typography>
                    </Box> 
                );
            }):null}
            {Object.keys(consultingRequest).includes('routeKnown')?
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>진학 컨설팅 MY UNI를 알게되신 경로</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.routeKnown}
                </Typography>
            </Box>:null}
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>참고 사항</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.reference}
                </Typography>
            </Box>    
            <Box sx={boxStyle}>
                <FormTitle sx={textStyle}>환불 계좌</FormTitle>
                <Typography variant="body1" sx={contentsStyle}>
                    {consultingRequest.refundAccount}
                </Typography>
            </Box>
        </Box>
    );
}

ConsultingRequestDetail.propTypes = {
    data: PropTypes.object.isRequired
}

export default ConsultingRequestDetail;