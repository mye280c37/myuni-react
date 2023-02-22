import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import DateText from './DateText';

function AdditionalCarrer(props) {

    const open = props.open;
    const setOpen = props.handler;

    return (
        <Drawer
        anchor={'bottom'}
        open={open}
        onClose={()=>setOpen(false)}
        sx={{backgroundColor: '#FFFAFA'}}
    >
        <Box
        sx={{ 
            width: 'auto',
            p: {xs: 3, md: 8},
            backgroundColor: '#FFFAFA'
        }}
        role="presentation"
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant='h6' sx={{ mt: 4 }}>
                    경력사항
                </Typography>
                <CloseIcon sx={{ cursor: 'pointer' }} onClick={()=>setOpen(false)}></CloseIcon>
            </Box>
            <Typography variant='body1'>현재</Typography>  
            <Typography variant="body1" component="div">
                <ul>
                    <li><DateText>2020.09 ~ </DateText> 검정고시 출신자 맞춤 진학 홈페이지 MY UNI 개발</li>
                    <li><DateText>2020.07 ~ </DateText> 학교 밖 청소년 대학 진학 강의 유튜브 채널 운영</li>
                    <li><DateText>2020.09 ~ </DateText> 서울시 학교밖청소년도움센터 친구랑 진학 컨설팅 1200회</li>
                    <li><DateText>2018.04 ~ </DateText> 김포시 학교 밖 청소년지원센터 대학입시 소양교육</li>
                </ul>
            </Typography>
            <Typography variant='body1'>2022년 9~11월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li><DateText>2022.11</DateText> 김포시 학교 밖 청소년 지원센터 진로 설계 프로그램 진행</li>
                    <li><DateText>2022.11</DateText> 2022 글로벌인재포럼 〈대전환 시대의 진로 탐색〉 세션 연사</li>
                    <li><DateText>2022.10</DateText> 동두천 학교 밖 청소년 1:1 면접 컨설팅 </li>
                    <li><DateText>2022.09</DateText> 경상남도 학교 밖 청소년 진학 박람회 면접 교육</li>
                    <li><DateText>2022.09</DateText> 동두천시 학교 밖 청소년 지원센터 모의 면접 교육</li>
                    <li><DateText>2022.09</DateText> 부산광역시 남구 학교 밖 청소년 지원센터 대학입시설명회</li>
                </ul>
            </Typography> 
            <Typography variant='body1'>2022년 8월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li>하남시 학교 밖 청소년 지원센터 1;1 진학 컨설팅</li>
                    <li>포항시 학교 밖 청소년 지원센터 대학입시 설명회</li>
                    <li>울산광역시 남구 대학입시 프로그램 〈어쩌다, 신입생〉 진행</li>
                    <li>동두천 학교 밖 청소년 지원센터 자기소개서 교육</li>
                    <li>서울시교육청 학교 밖 청소년 도움센터 진학 강의 60차시</li>
                    <li>하남시 학교 밖 청소년 지원센터 입시설명회 </li>
                </ul>
            </Typography>
            <Typography variant='body1'>2022년 7월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li>부산지역 학교 밖 청소년 지원센터 실무자 역량 강화 교육연수 </li>
                    <li>용인시 학교 밖 청소년 1:1 진학 컨설팅 </li>
                    <li>노원구 학교 밖 청소년 지원센터 실무자 교육</li>
                </ul>
            </Typography>
            <Typography variant='body1'>2022년 6월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li>김포시 학교 밖 청소년 지원센터 취업 소양교육 진행</li>
                    <li>충청북도 학교 밖 청소년 1:1 진학 컨설팅(35인 대상)</li>
                </ul>
            </Typography>
            <Typography variant='body1'>2022년 5월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li>울산광역시 학교 밖 청소년 지원센터 대학입시설명회</li>
                    <li>부산광역시 남구 학교 밖 청소년 지원센터 대학입시설명회</li>
                    <li>광주시 학교 밖 청소년 지원센터 대학입시설명회/컨설팅</li>
                    <li>동두천 학교 밖 청소년 지원센터 대학입시설명회</li>
                </ul>
            </Typography>
            <Typography variant='body1'>~ 2022년 4월</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li><DateText>2022.03</DateText> 부산지역 학교 밖 청소년 지원센터 실무자 역량 강화 교육연수</li>
                    <li><DateText>2022.03</DateText> 한국청소년상담복지개발원 학교 밖 청소년 지원센터 종사자 보수교육 진행</li>
                    <li><DateText>2022.02</DateText> 대구광역시 학교 밖 청소년 지원센터 대학입시 설명회</li>
                </ul>
            </Typography>
            <Typography variant='body1'>~ 2021년</Typography> 
            <Typography variant="body1" component="div">
                <ul>
                    <li><DateText>2021.11</DateText> 고양시 학교 밖 청소년 지원센터 면접 컨설팅</li>
                    <li><DateText>2021.08</DateText> 부산광역시 남구 학교 밖 청소년 지원센터 입시 설명회</li>
                    <li><DateText>2021.08</DateText> 전라남도 학교 밖 청소년 지원센터 대학입시 설명회</li>
                    <li><DateText>2021.08</DateText> 부산광역시 연제구 1:1 진학 컨설팅 진행(10인 대상)</li>
                    <li><DateText>2021.08</DateText> 경상남도 학교 밖 청소년 지원센터 대학입시설명회</li>
                    <li><DateText>2021.07</DateText> 충청북도 학교 밖 청소년 지원센터 대학입시설명회</li>
                    <li><DateText>2021.07</DateText> 경기도 학교 밖 청소년 지원센터 맞춤형 대학입시설명회</li>
                    <li><DateText>2021.06</DateText> 한국청소년상담복지개발원 학교 밖 청소년 진학 설명회</li> 
                    <li><DateText>2021.05</DateText> 울산광역시 학교 밖 청소년 지원센터 대학입시설명회</li>
                    <li><DateText>2021.05 / 08</DateText> 기장군 진로교육센터 학교 밖 청소년 맞춤형 입시설명회</li>
                    <li><DateText>2021.03</DateText> 부산광역시 학교 밖 청소년 지원센터 실무자 교육</li>
                    <li><DateText>2020.08 ~ 2021.02</DateText> 서울세계시민교육 현황 분석 및 향후 추진 과제 연구</li> 
                    <li><DateText>2020.10 ~ 2020.11</DateText> 서울시교육청 자율 청소년 메이커톤 프로젝트 멘토</li>
                </ul>
            </Typography>
        </Box>
    </Drawer>
    )
}

AdditionalCarrer.propTypes = {
    open: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export default AdditionalCarrer;
