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
            consulting_option: [],
            application_type: [],
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
            uni_list:[],
            reason: ""
        },
        additional_info: [],
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

    return{
        form,
        onConsultingRequestChange
    };
}