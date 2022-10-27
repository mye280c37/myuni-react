import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TabContainer from '../components/common/TabContainer';
import BoxTitle from '../components/common/BoxTitle';
import Image from '../components/common/image';
import PageLayout from './PageLayout';

const myUniIntroduction = () => {
    return (
        <Box sx={{textAlign: 'left'}}>
            <BoxTitle>MyUni</BoxTitle>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Image alt="entire_diagram" src="img/myuni_entire_diagram.png" />
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{ mb: 2 }}>
                        학교 밖 청소년들의 대입 준비 과정은 고등학교에 재학 중인 학생들보다 많이 복잡합니다.
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        먼저 검정고시 출신자 지원이 가능한 대학을 구분하고, 대학마다 다른 검정고시 성적 내신 환산 방식을 정리해야 합니다. 심지어는 환산표를 공개하지 않는 대학도 많아 꼼꼼하게 따져봐야 하는데, 이에 더해 학교 밖 청소년 전형 선택 방법이나 자기소개서 작성법에 대한 정보가 존재하지 않아 많은 청소년들이 대입을 포기하거나, 아무 대학에나 지원해 입시를 운에 맡기고는 합니다.
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        이러한 안타까운 상황을 해결하려면 검정고시 맞춤 입시 정보 제공이 필수적이라는 생각이 들었습니다. 이에 수년간 학교 밖 청소년 전문 진학 컨설턴트 및 강사로 활동한 노하우를 가득 담아 ‘검정고시 출신자 맞춤 입시정보 제공 웹사이트 MY UNI’를 제작했습니다.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        MYUNI 탑재 기능은 다음과 같습니다.
                    </Typography>
                    <Card variant="outlined" sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body1" component="div">
                                <ol>
                                    <li>검정고시 성적 ⇒ 내신 등급/점수 자동 환산</li>
                                    <li>대학별 입시 결과(내신 커트라인) 확인</li>
                                    <li>수시 지원 컨설팅 + 자기소개서 컨설팅 + 면접 컨설팅</li>
                                    <li>대학입시 소양교육 강의(입시전략 + 자기소개서 + 면접 준비)</li>
                                    <li>논술 첨삭 및 상담</li>
                                </ol>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

const consultantIntroduction = () => {
    return (
        <Box sx={{ textAlign: 'left '}}>
            <BoxTitle>학교 밖 청소년 전문 진학 컨설턴트/강사 강예은</BoxTitle>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Image alt="consultant_profile" src="img/consultant_profile.jpg" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant='h6'>
                        약력
                    </Typography>
                    <Typography variant="body1" component="div">
                        <ul>
                            <li>김포시청소년육성재단 학교 밖 청소년 지원센터 대학입시 소양교육 강사</li>
                            <li>서울특별시교육청 학교 밖 청소년 도움센터 진학 강의/컨설팅/면접 교육</li>
                            <li>우수 멘토 부문 여성가족부장관상 수상(2019)</li>
                            <li>김포시청소년육성재단 이사장 표창장 수상(2018)</li>
                            <li>한국청소년상담복지개발원 학교 밖 청소년 진학 가이드</li>
                            <li>부산광역시 전역 꿈드림센터 실무자 26인 대상 실무자 교육</li>
                            <li>기장군 진로교육지원센터 학교 밖 청소년 대학입시설명회</li>
                            <li>울산광역시 학교 밖 청소년 지원센터 맞춤형 대학입시설명회</li>
                            <li>경기도 총괄 학교 밖 청소년 지원센터 대학입시설명회</li>
                            <li>경상남도 학교 밖 청소년 지원센터 자기소개서/면접 준비 강의 진행</li>
                            <li>학교 밖 청소년 진로 교육 SW 키트 개발 및 기부</li>
                            <li>서울특별시교육청 자율 청소년 메이커톤 프로젝트 멘토</li>
                            <li>검정고시 출신자 맞춤 입시정보 제공 홈페이지 MY UNI 운영</li>
                            <li>학교 밖 청소년 진학 강의 유튜브 운영[채널명: 김포시학교밖청소년지원센터]</li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default function MyUni() {
    const labels = ["MyUni 소개", "컨설턴트 소개"];
    const contents = [
        myUniIntroduction(),
        consultantIntroduction()
    ];

    return (
        <PageLayout title={"MYUNI"} secondary={"검정고시 출신자 맞춤 입시 정보 제공 홈페이지"}>
            <TabContainer labels={labels} contents={contents} />
        </PageLayout>
    );
}
