import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import TabContainer from '../components/common/TabContainer';
import BoxTitle from '../components/common/BoxTitle';
import ConsultingProcess from '../components/ConsultingIntroduction/ConsultingProcess';
import PageLayout from './PageLayout';
import TitlebarImageList from '../components/common/TitlebarImageList';

function CustomListItem(props) {
    return (
        <ListItem key={props.key}>
        <ListItemIcon>
            <BeenhereIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText
            primary={props.primary}
            secondary={props.secondary}
        />
        </ListItem>
    );
}

CustomListItem.propsType = {
    key: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string
}

function generate(data, element) {
    return data.map((value, index) =>
        React.cloneElement(element, {
            key: index,
            primary: value
        }),
    );
}

const titleStyle = {
    mt: 8,
    mb: 2
};

const subBoxStyle = {
    mb: 4
};

function applicationConsulting() {
    const process = [
        { primary: "준비도/성향 파악"}, 
        { primary: "희망지원 대학/학과 파악"}, 
        { primary: "희망 지원 대학/학과 분석"}, 
        { primary: "입학사례기반 대학선정", secondary: "2015~2021 학교 밖 청소년 진학 사례 보유"}, 
        { primary: "지원전략 및 월별계획 수립"}
    ];
    const targets = [
        "검정고시 성적을 환산하고, 입시 결과를 비교해봐도, 희망 대학을 못 정하겠다!",
        "희망 대학-학과는 정했는데, 과연 내가 갈 수 있는 대학인지를 알아보고 싶다!",
        "대학입시 소양교육 강의를 아무리 돌려봐도 자기소개서 작성이 막막하다!",
        "자기소개서를 열심히 작성했는데, 주변에 첨삭해주실 분이 계시지 않는다!",
        "혼자서 준비할 면접이 벌써부터 걱정이다!"
    ];
    const contents = [
        "검정고시 출신자 전형 대입 경향 분석",
        "검정고시 성적 맞춤 지원 가능 대학 제시",
        "목표 대학/학과 설정, 지원 전략 수립",
        "전형(학생부 교과/종합/적성/수능) 선택",
        "자기소개서 재료 선정 및 첨삭",
        "수시 원서 접수(9월 10일~14일) 교육",
        "면접 준비(기본 문항 분석 및 모의 면접 진행)"
    ];
    
    return (
        <Box sx={{textAlign: 'left'}}>
            <BoxTitle>수시지원 컨설팅</BoxTitle>
            <Box sx={subBoxStyle}>
                <Typography variant='h5' sx={titleStyle}>수시지원 컨설팅 프로세스</Typography>
                <ConsultingProcess process={process} />
            </Box>
            <Box sx={subBoxStyle}>
                <Typography variant='h5' sx={titleStyle}>대상</Typography>
                <List dense={true}>
                    {generate(
                        targets,
                        <CustomListItem/>
                    )}
                </List>
            </Box>
            {/* <Box sx={{ mb: 3 }}>
                <Typography variant='h5' sx={titleStyle}>강사 및 커리큘럼 소개</Typography>
                <YouTube
                    videoId={'7rEQOlXro00'}                  // defaults -> null
                />

            </Box> */}
            <Box sx={{ mb: 3 }}>
                <Typography variant='h5' sx={titleStyle}>컨설팅 내용</Typography>
                <List dense={true}>
                    {generate(
                        contents,
                        <CustomListItem/>
                    )}
                </List>
            </Box>
            <Box sx={subBoxStyle}>
                <Typography variant='h5' sx={titleStyle}>모집 개요</Typography>
                <Grid container spacing={4}>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>수업 방식</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            ZOOM을 활용한 온라인 수업(모의 면접은 오프라인이 원칙이지만, 코로나 19 상황을 반영하여 진행합니다.)
                        </Typography>
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>수업 시간</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            아래의 설문지에서 희망 컨설팅 시간을 선택해주시면, 개별적으로 연락드리도록 하겠습니다.
                        </Typography>
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>수업 대상</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            학부모님도 컨설팅 참여 가능합니다.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={subBoxStyle}>
                <Typography variant='h5' sx={titleStyle}>문의 사항</Typography>
                <Typography variant='body1'>진학 컨설팅 관련 문의사항은 imaginemyuni@gmail.com으로 메일 보내주세요.</Typography>
            </Box>
        </Box>
    );
}

function selfIntroductionConsulting() {
    const process = [
        {primary: "자기소개서/포트폴리오 바탕 예상질문 추출"}, 
        {primary: "기본질문 연습 및 모의면접"}, 
        {primary: "심화질문 연습 및 모의면접"}, 
        {primary: "개인별 맞춤 질문 연습 및 모의면접"}, 
        {primary: "실전면접"}
    ];
    const imageList = [
        {
            img: 'img/cover_letter_part.png',
            title: '2020 대입 합격자 자소서 첨삭 과정 중 일부(1년 커리큘럼 이수자)',
            rows: 4,
            featured: true,
        }
    ];
    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>자기소개서 컨설팅</BoxTitle>
            <Box sx={subBoxStyle}>
                <Typography variant='h5' sx={{ mb: 2 }}>자기소개서 컨설팅 프로세스</Typography>
                <ConsultingProcess process={process} />
            </Box>
            <Box sx={subBoxStyle}>
                <Typography variant='h5'>자기소개서 컨설팅 예시</Typography>
                <TitlebarImageList
                    itemData={imageList} 
                />
            </Box>
        </Box>
    );
}

function interviewConsulting() {
    const process = [
        {primary: "자기소개서/포트폴리오 바탕 예상질문 추출"}, 
        {primary: "기본질문 연습 및 모의면접"}, 
        {primary: "심화질문 연습 및 모의면접"}, 
        {primary: "개인별 맞춤 질문 연습 및 모의면접"}, 
        {primary: "실전면접", secondary: "집단/개인 면접 + 면접 착장 + 입장부터 퇴장까지"}
    ];
    const imageList = [
        {
            img: 'img/interview_review_1.png',
            title: '면접 카톡 후기',
            rows: 4,
            cols: 2,
            featured: true,
        },
        {
            img: 'img/interview_review_2.png',
            title: '2020 면접 대비 교육 당시 서프라이즈로 합격증 보여주는 학생',
            rows: 1,
            cols: 4,
            featured: true,
        }
    ];
    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>면접 컨설팅</BoxTitle>
            <Box sx={subBoxStyle}>
                <Typography variant='h5'>면접 컨설팅 프로세스</Typography>
                <Typography variant='body2' sx={{ mb: 2 }} color='text.secondary'>실시간 피드백 및 약점 보완 + 개인별 면접 영상 촬영 진행</Typography> 
                <ConsultingProcess process={process} />
            </Box>
            <Box sx={subBoxStyle}>
                <Typography variant='h5'>면접 컨설팅 후기</Typography>
                <TitlebarImageList
                    itemData={imageList} 
                />
            </Box>
        </Box>
    );
}

const essayConsulting = () => {
    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>논술 컨설팅</BoxTitle>
            <Box sx={subBoxStyle}>
                <Typography variant='h5'>대학별 채점 기준과 출제 의도를 고려하여 논술 첨삭을 진행합니다. (인문계 한정)</Typography>
                <Typography variant="body1" component="div">
                    <ol>
                        <li>원고지에 작성 후, 사진을 촬영해 업로드합니다. (글자가 정확히 보이게 촬영)</li>
                        <li>업로드 이후에는 수정이 불가능하며, 첨삭이 완료되면 해당 글은 삭제할 수 없습니다.</li>
                        <li>신청자가 많을 경우, 1인당 서비스 이용 횟수가 제한됩니다.</li>
                    </ol>
                </Typography>
            </Box>
        </Box>
    );
}

export default function ConsultingIntroduction() {
    const labels = ["수시지원 컨설팅", "자기소개서 컨설팅", "면접 컨설팅", "논술 컨설팅"];
    const contents = [
        applicationConsulting(),
        selfIntroductionConsulting(),
        interviewConsulting(),
        essayConsulting()
    ];

    return (
        <PageLayout title={"진학컨설팅"}>
            <TabContainer labels={labels} contents={contents} />
        </PageLayout>
    );
}
