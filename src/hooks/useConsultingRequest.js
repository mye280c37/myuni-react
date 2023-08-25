import { useState } from "react";

export default function useConsultingRequest(values=null) {
    const [ consultingRequest, setConsultingRequest ] = useState(values===null? {
        user: {
            name: "",
            sex: "",
            age: "",
            phone: "",
        },
        score : {
            korean: "",
            english: "",
            math: "",
            society: "",
            science: "",
            history: "",
            optional: "",
            average: "",
        },
        uni: {
            1:{
                university: "",
                major: ""
            },
            2:{
                university: "",
                major: ""
            },
            3:{
                university: "",
                major: ""
            },
            4:{
                university: "",
                major: ""
            },
            5:{
                university: "",
                major: ""
            },
            6:{
                university: "",
                major: ""
            },
            reason: ""
        },
        consultingOption: [],
        applicationType: [],
        reason: "",
        desiredDate: "",
        reference: "",
        routeKnown: "",
        refundAccount: "",
        additionalInfo: [],
        checked: false,
    }: values);

    // const handleChange = (name, value) => {
    //     setConsultingRequest({
    //         ...consultingRequest,
    //         [name]: value,
    //     });
    // };

    return{
        consultingRequest,
        setConsultingRequest
    }; 
}