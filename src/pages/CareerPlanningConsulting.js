import * as React from 'react';
import Box from '@mui/material/Box';

import SubSectionBox from '../components/ConsultingIntroduction/SubSectionBox';
import CustomList from '../components/ConsultingIntroduction/CustomList';
import ConsultingProcess from '../components/ConsultingIntroduction/ConsultingProcess';
import PageLayout from './PageLayout';


export default function CareerPlanningConsulting() {

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
        <PageLayout title={"진로 설계 컨설팅"}>
            <Box sx={{ textAlign: 'left '}}>
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
        </PageLayout>
    );
}