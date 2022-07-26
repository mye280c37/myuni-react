import { useState } from "react";

export default function useUserInfo() {
    const [ form, setForm ] = useState({
        name: "",
        sex: "",
        age: "",
        phone: ""
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return{
        form,
        onChange
    };
}