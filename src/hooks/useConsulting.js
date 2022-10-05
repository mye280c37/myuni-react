import { useState } from "react";

export default function useConsulting(values=null) {
    const [ form, setForm ] = useState({
        consulting_option: values === null? "": values.consulting_option,
        application_type: values === null? "": values.application_type,
        reason: values === null? "": values.reason,
        date: values === null? "": values.date,
    });

    const onConsultingChange = (name, value) => {
        console.log(name);
        console.log(value);
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    };

    return{
        form,
        onConsultingChange
    };
}