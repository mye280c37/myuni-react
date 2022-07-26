import { useState } from "react";

export default function useUniversity() {
    const [ form, setForm ] = useState({
        university: "",
        subject: ""
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    return{
        form,
        onChange
    };
}