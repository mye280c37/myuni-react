import { useState } from "react";

export default function useConsulting() {
    const [ form, setForm ] = useState({
        consulting_option: "",
        application_type: "",
        reason: "",
        date: "",
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