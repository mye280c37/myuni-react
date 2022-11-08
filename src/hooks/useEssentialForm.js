import { useState } from "react";

export default function useEssentialForm() {
    const [ form, setForm ] = useState({
        consultingOption: {
            checked:{
                0: false,
                1: false,
                2: false
            },
            labels: ["수시 지원", "자기소개서 컨설팅", "면접 컨설팅"],
            etc: ""
        },
        applicationType: {
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
        desiredDate: "",
        reference: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return{
        form,
        onChange
    };
}