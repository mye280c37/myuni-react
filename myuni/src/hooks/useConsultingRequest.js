import { useState } from "react";

export default function useConsultingRequest() {
    const [ form, setForm ] = useState({
        user_info: {
            name: "",
            sex: "",
            age: "",
            phone: ""
        },
        consulting:{
            consulting_option: {
                checked:{
                    0: false,
                    1: false,
                    2: false
                },
                labels: ["수시 지원", "자기소개서 컨설팅", "면접 컨설팅"],
                etc: ""
            },
            application_type: {
                checked:{
                    0: false,
                    1: false,
                    2: false,
                    3: false
                },
                labels: ["학생부 교과(검정고시 성적)", "학생부 교과 면접(검정고시 성적 + 면접)", "정시(수능)", "기타"],
                etc: ""
            },
            reason: "",
            date: "",
        },
        score: {
            korean: "",
            english: "",
            math: "",
            society: "",
            science: "",
            history: "",
            optional: "",
            average: ""
        },
        uni_info: {
            uni_list:{
                1:{
                    university: "",
                    subject: ""
                },
                2:{
                    university: "",
                    subject: ""
                },
                3:{
                    university: "",
                    subject: ""
                },
                4:{
                    university: "",
                    subject: ""
                },
                5:{
                    university: "",
                    subject: ""
                },
                6:{
                    university: "",
                    subject: ""
                }
            },
            reason: ""
        },
        reference: "",
        additional_info: {
            0:{
                header: "제 1회 검정고시(04.09) 응시자 필수 답변",
                title: "제 1회 검정고시 응시 과목",
                example: "예시) 수학, 과학",
                value: ""
            },
            1:{
                header: "2023 수능 응시자 필수 답변",
                title: "모의고사 등급을 작성해주세요.",
                example: "예시) 국어 1 영어 1 수학 1 한국사 1 사탐(세계지리 1 사회문화 1) 아랍어 1",
                value: ""
            }
        },
        route_known: {
            checked:{
                0: false,
                1: false,
                2: false,
                3: false
            },
            labels: ["센터 대학입시 설명회", "유튜브 채널", "지인 소개", "기타"],
            etc: ""
        },
        refund_account: ""
    });

    const onConsultingRequestChange = (name, value) => {
        console.log(name);
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }

    const onTextFieldChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(form);
    }

    return{
        form,
        onConsultingRequestChange,
        onTextFieldChange
    };
}