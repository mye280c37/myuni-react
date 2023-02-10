import * as React from 'react';
import PageLayout from './PageLayout';

import MaterialItem from '../components/YouTubeMaterials/MaterialItem';

const newContents = [
    {title: "[강남인강] 학교 밖 청소년을 위한 대학 진학 설명회 1편_ 강예은 선생님", src: "https://www.youtube.com/embed/o6TziPFoRU0"},
    {title: "[강남인강] 학교 밖 청소년을 위한 대학 진학 설명회 2편_ 강예은 선생님", src: "https://www.youtube.com/embed/4adT1XeMIac"},
    {title: "[강남인강] 학교 밖 청소년을 위한 대학 진학 설명회 3편_ 강예은 선생님", src: "https://www.youtube.com/embed/JKvjWqUFbJo"}
];

// const contents1 =[
//     {title: '1. 강사 소개, 커리큘럼 소개', src: 'https://www.youtube.com/embed/B4dFCnAtv18'},
//     {title: '2. 대학 입학 전형의 이해: 모집 시기, 지원 방법, 복수 지원 개념', src: 'https://www.youtube.com/embed/7HDHTbAYbps'},
//     {title: '3. 학생부 종합 전형 지원 전략(1): 지원 가능 대학, 주요 특징, 자기소개서 공통 문항', src: 'https://www.youtube.com/embed/FoZls1wLWNs'},
//     {title: '4. 학생부 종합 전형 지원 전략(2): 대학별 자율문항, 대체 서식, 청소년 생활기록부', src: 'https://www.youtube.com/embed/4tNqgs30iuA'},
//     {title: '5. 논술 전형 지원 전략: 지원 가능 대학, 수능 최저 학력 기준', src: 'https://www.youtube.com/embed/IGZFHW9MgFQ'},
//     {title: '6. 적성 전형 지원 전략: 지원 가능 대학, 주요 특징', src: 'https://www.youtube.com/embed/2R5ukwALZMI'},
//     {title: '7. 학생부 교과 전형 지원 전략: 지원 가능 대학, 주요 특징', src: 'https://www.youtube.com/embed/IfqNtYeICK4'}
// ];

// const contents2 = [
//     {title: '1. 대입 자기소개서 작성법(1): 학생부 종합전형 특징, 1번 문항 구성하기', src: 'https://www.youtube.com/embed/IfqNtYeICK'},
//     {title: '2. 대입 자기소개서 작성법(2): 2번 문항, 3번 문항 구성하기', src: 'https://www.youtube.com/embed/YKfvzUXHgro'},
//     {title: '3. 대입 자기소개서 작성법(3): 자기소개서 작성 유의사항', src: 'https://www.youtube.com/embed/zRVXRX4DVbo'},
//     {title: '4. 자기소개서 1번 문항 작성법 & 합격 사례 분석(1): 핵심 역량', src: 'https://www.youtube.com/embed/2U3QGD9k9tM'},
//     {title: '5. 자기소개서 1번 문항 작성법 & 합격 사례 분석(2): 문항 세부 분석', src: 'https://www.youtube.com/embed/2U3QGD9k9tM'},
//     {title: '6. 자기소개서 1번 문항 작성법 & 합격 사례 분석(3): 합격 사례 분석', src: 'https://www.youtube.com/embed/XLHJjB7IfBE'},
//     {title: '7. 자기소개서 2번 문항 작성법 & 합격 사례 분석(1): 핵심 역량', src: 'https://www.youtube.com/embed/jyqG3RZWBiw'},
//     {title: '8. 자기소개서 2번 문항 작성법 & 합격 사례 분석(2): 문항 세부 분석', src: 'https://www.youtube.com/embed/gCH1oW7TY2M'},
//     {title: '9. 자기소개서 2번 문항 작성법 & 합격 사례 분석(3): 합격 사례 분석', src: 'https://www.youtube.com/embed/FQgEzGc4sq8'},
//     {title: '10. 자기소개서 3번 문항 작성법 & 합격 사례 분석(1): 핵심 역량', src: 'https://www.youtube.com/embed/rh9azip3p0E'},
//     {title: '11. 자기소개서 3번 문항 작성법 & 합격 사례 분석(2): 세부 문항 분석', src: 'https://www.youtube.com/embed/1p35mQ9yPLA'},
//     {title: '12. 자기소개서 3번 문항 작성법 & 합격 사례 분석(3): 합격 사례 분석', src: 'https://www.youtube.com/embed/OvAzaKFwtxM'},
// ];

// const contents3 = [
//     {title: '1. 2021 면접 준비 교육', src: 'https://www.youtube.com/embed/HoPuhkDeMNA'}
// ]

export default function YouTubeMaterials () {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <PageLayout title={"대학입시소양교육"}>
            {newContents.map(
                    (item, index) => {
                        return (
                            <MaterialItem 
                                expanded={expanded}
                                handleChange={handleChange} 
                                id={'contents'+index}
                                title={item.title}
                                src={item.src}
                            />
                        );
                    }
                )
            }
            {/* <SubBox title='대입 전형 지원 전략 강의'>
                {contents1.map(
                    (item, index) => {
                        return (
                            <MaterialItem 
                                expanded={expanded}
                                handleChange={handleChange} 
                                id={'contents1'+index}
                                title={item.title}
                                src={item.src}
                            />
                        );
                    }
                )}
            </SubBox>
            <SubBox title='자기소개서 작성법 강의'>
                {contents2.map(
                    (item, index) => {
                        return (
                            <MaterialItem 
                                expanded={expanded}
                                handleChange={handleChange} 
                                id={'contents2'+index}
                                title={item.title}
                                src={item.src}
                            />
                        );
                    }
                )}
            </SubBox>
            <SubBox title='면접 준비 강의'>
                {contents3.map(
                    (item, index) => {
                        return (
                            <MaterialItem 
                                expanded={expanded}
                                handleChange={handleChange} 
                                id={'contents3'+index}
                                title={item.title}
                                src={item.src}
                            />
                        );
                    }
                )}
            </SubBox> */}
        </PageLayout>
    )
}
