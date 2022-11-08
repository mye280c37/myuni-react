import { useState } from "react";

export default function useUniversity(values=null) {
    const [ form, setForm ] = useState((values === null)? values: {
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
    });

    const onReasonChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onUniListChange = (priority, uni) => {
        setForm({
            ...form,
            [priority]: uni
        });
    };

    console.log(values);

    return{
        form,
        onReasonChange,
        onUniListChange,
    };
}