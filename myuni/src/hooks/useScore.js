import { useState } from "react";

export default function useScore() {
    const [ form, setForm ] = useState({
        korean: "",
        english: "",
        math: "",
        society: "",
        science: "",
        history: "",
        optional: "",
        average: ""
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