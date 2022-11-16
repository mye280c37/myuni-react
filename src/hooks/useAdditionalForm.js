import { useState } from "react";

export default function useAdditionalForm(values=null) {

    const [additionalInfo, setAddtionalInfo] = useState(values===null?{
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
    }: values.additionalInfo);

    const [form, setForm] = useState(values===null?{
        additionalInfo: additionalInfo,
        routeKnown: {
            checked:{
                0: false,
                1: false,
                2: false,
                3: false
            },
            labels: ["센터 대학입시 설명회", "유튜브 채널", "지인 소개", "기타"],
            etc: ""
        }
    }: values);

    const onAdditionalInfoChange = (name, value) => {
        setAddtionalInfo({
            ...additionalInfo,
            [name]: value
        });
        onChange('additionalInfo', additionalInfo);
    }
    

    const onChange = (name, value) => {
        setForm({
            ...form,
            [name]: value          
        });
    };

    return{
        form,
        handler:{
            additionalInfo: onAdditionalInfoChange,
            routeKnown: onChange
        }
    };
}