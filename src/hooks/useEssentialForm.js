import { useState } from "react";

export default function useEssentialForm(values=null) {
    const [ form, setForm ] = useState(values===null? {
        consultingOption: {
            checked:{
                0: false,
                1: false,
                2: false
            },
            labels: ["수시 지원 컨설팅", "청소년 생활기록부/대체서식 컨설팅", "면접 컨설팅", "진로 설계 컨설팅"],
            // etc: ""
        },
        applicationType: {
            checked:{
                0: false,
                1: false,
                2: false,
                3: false
            },
            labels: ["학생부 교과(검정고시 성적)", "학생부 교과 면접(검정고시 성적 + 면접)", "학생부 종합(청소년 생활기록부 + 대체서식)", "정시(수능)"],
            // etc: ""
        },
        reason: "",
        desiredDate: "",
        reference: "",
    }: {
        consultingOption: values.consultingOption,
        applicationType: values.applicationType,
        reason: values.reason,
        desiredDate: values.desiredDate,
        reference: values.reference
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onCheckBoxFormChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    }

    return{
        form,
        onChange,
        onCheckBoxFormChange
    };
}