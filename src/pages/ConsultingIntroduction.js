import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import SubSectionBox from '../components/ConsultingIntroduction/SubSectionBox';
import CustomList from '../components/ConsultingIntroduction/CustomList';
import TabContainer from '../components/common/TabContainer';
import BoxTitle from '../components/common/BoxTitle';
import ConsultingProcess from '../components/ConsultingIntroduction/ConsultingProcess';
import PageLayout from './PageLayout';
import ImportantBox from '../components/ConsultingIntroduction/ImportantBox';


function applicationConsulting() {
    const process = [
        { primary: <span>준비도<br/> 및 성향 파악</span>}, 
        { primary: <span>희망지원 대학/<br/>학과 파악</span>}, 
        { primary: <span>희망 지원 대학/<br/>학과 분석</span>}, 
        { primary: <span>입학사례 기반 <br/>대학 선정</span>, secondary: "2015~ 학교 밖 청소년 진학 사례 보유"}, 
        { primary: <span>지원전략 <br/>및 계획 수립</span>}
    ];
    const targets = [
        "검정고시 성적을 환산하고, 입시 결과를 비교해봐도, 희망 대학을 못 정하겠다!",
        "희망 대학-학과는 정했는데, 과연 내가 갈 수 있는 대학인지를 알아보고 싶다!",
        "혼자서 준비할 면접이 벌써부터 걱정이다!"
    ];
    const contents = [
        "검정고시 출신자 전형 대입 경향 분석",
        "검정고시 성적 맞춤 지원 가능 대학 제시",
        "목표 대학/학과 설정, 지원 전략 수립",
        "전형(학생부 교과/종합/논술/수능) 선택",
        "수시 원서 접수(9월 10일~14일) 교육",
        "면접 준비(기본 문항 분석 및 모의 면접 진행)"
    ];
    
    return (
        <Box sx={{textAlign: 'left'}}>
            <BoxTitle>수시지원 컨설팅</BoxTitle>
            <SubSectionBox title='수시지원 컨설팅'>
                <ConsultingProcess process={process} />
            </SubSectionBox>
            <SubSectionBox title='대상'>
                <CustomList contents={targets} />
            </SubSectionBox>
            <SubSectionBox title='컨설팅 내용'>
                <CustomList contents={contents} />
            </SubSectionBox>
            <SubSectionBox title='컨설팅 개요'>
                <Grid container spacing={4}>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>컨설팅 방식</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            진학 컨설팅 MY UNI는 코로나 19 확산 방지를 위해 온라인 화상회의 플랫폼 ZOOM을 활용하고 있으며, 참가 방법은 예약 확정 후 메일/문자로 발송됩니다.
                        </Typography>
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>컨설팅 시간</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            1시간 내외
                        </Typography>
                    </Grid>
                    <Grid item md={4} sx={{ width: '100%' }}>
                        <Typography variant='h6'>컨설팅 대상</Typography>
                        <Divider sx={{ mt: 1, mb: 1 }} />
                        <Typography variant='body1'>
                            학부모님도 컨설팅 참여 가능합니다.
                        </Typography>
                    </Grid>
                </Grid>
            </SubSectionBox>
            <SubSectionBox title='문의 사항'>
                <Typography variant='body1'>진학 컨설팅 관련 문의사항은 imaginemyuni@gmail.com으로 메일 보내주세요.</Typography>
            </SubSectionBox>
        </Box>
    );
}

function documentConsulting() {
    const introduction = [
        "학생부 미보유자 대체 서식 개요, 실제 서식",
        "청소년생활기록부 개요",
        "정시전형 내신반영(수능위주전형 교과 평가)"
    ];

    const contents = [
        "대체서식 작성 준비, 작성 방법",
        "대체서식 활동 선정 예시, 선정 기준",
        "학업 관련 대체서식 작성 방법",
        "청소년생활기록부 중점 사항",
        "증빙 서류 준비 방법 안내"
    ];

    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>청소년생활기록부, 대체서식 컨설팅</BoxTitle>
            <ImportantBox>
                <CustomList contents={introduction} />
            </ImportantBox>
            <SubSectionBox title='컨설팅 내용'>
                <CustomList contents={contents} />
            </SubSectionBox>
        </Box>
    );
}

function interviewConsulting() {
    const process = [
        {primary: <span>활동 경험 논의 <br/>및 예상질문 추출</span>}, 
        {primary: <span>학과 기출 질문 <br/>및 기본 질문 연습</span>}, 
        {primary: <span>제시문 기반 <br/>심화 질문 <br/>및 토론 면접 연습</span>}, 
        {primary: <span>개인별 맞춤 질문 <br/>연습 및 모의면접</span>}, 
        {primary: "실전면접", secondary: "집단/개인 면접 + 면접 착장 + 입장부터 퇴장까지"}
    ];

    const contents = [
        "대입 면접 유의 사항",
        "지원 희망 학교 분석",
        "대학 별 특징 파악",
        "기본 질문 답변 및 피드백",
        "학과 별 기출문제 답변 피드백",
        "심화 질문 답변 및 피드백",
        "면접 답변 소재 파악",
        "면접 팁 최종 정리",
    ];

    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>면접 컨설팅</BoxTitle>
            <ImportantBox>
                면접 컨설팅은 모의 면접 방식으로 진행됩니다.<br/> 면접 때 입을 착장을 준비해주시고, 카메라를 켜주시기 바랍니다.
            </ImportantBox>
            <SubSectionBox title='면접 컨설팅 프로세스' secondary={'실시간 피드백 및 약점 보완 + 개인별 면접 영상 촬영 진행'}>
                <ConsultingProcess process={process} />
            </SubSectionBox>
            <SubSectionBox title='컨설팅 내용'>
                <CustomList contents={contents} />
            </SubSectionBox>
        </Box>
    );
}

const careerPlanningConsulting = () => {

    const process = [
        {primary: <span>삶, 경력, 진로, <br/>심층적 자기 이해</span>}, 
        {primary: <span>진로 탐색 <br/>및 의사 결정</span>}, 
        {primary: <span>진로 계획 및 준비, <br/>평가 및 피드백</span>}
    ];

    const stepOneDetail = [
        "진로 설계의 중요성",
        "진로 개념 이해",
        "삶·진로·직업",
        "직업세계의 이해",
        "자신의 이해",
        "검사 도구 진단"
    ];

    const stepTwoDetail = [
        "직업 목록 종합하기",
        "직업 대안 선정",
        "3가지 진로 탐색",
        "수행 직무 및 환경",
        "필요 역량 및 적성",
        "비전 수립하기"
    ];

    const stepThreeDetail = [
        "직업 대안 선택하기",
        "대안 평가 매트릭스",
        "진로 과제 도출하기",
        "진로 비전체계 개발하기",
        "단계 별 계획 및 준비",
        "진로 설계 평가 및 피드백"
    ];

    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>진로 설계 컨설팅</BoxTitle>
            <SubSectionBox title='진로 설계 컨설팅 프로세스'>
                <ConsultingProcess process={process} />
            </SubSectionBox>
            <SubSectionBox title='STEP 1. 삶, 경력, 진로, 심층적 자기 이해'>
                <CustomList contents={stepOneDetail} />
            </SubSectionBox>
            <SubSectionBox title='STEP 2. 진로 탐색 및 의사 결정'>
                <CustomList contents={stepTwoDetail} />
            </SubSectionBox>
            <SubSectionBox title='STEP 3. 진로 계획 및 준비, 평가 및 피드백'>
                <CustomList contents={stepThreeDetail} />
            </SubSectionBox>
        </Box>
    );
}

export default function ConsultingIntroduction() {
    const labels = ["수시지원 컨설팅", "청소년생활기록부, 대체서식 컨설팅", "면접 컨설팅", "진로 설계 컨설팅"];
    const contents = [
        applicationConsulting(),
        documentConsulting(),
        interviewConsulting(),
        careerPlanningConsulting()
    ];

    return (
        <PageLayout title={"진학컨설팅"}>
            <TabContainer labels={labels} contents={contents} />
        </PageLayout>
    );
}
