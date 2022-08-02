import { useState } from "react";

export default function useUserInfo(values=null) {

    const [ form, setForm ] = useState({
        name: values === null? "": values.name,
        sex: values === null? "": values.sex,
        age: values === null? "": values.age,
        phone: values === null? "": values.phone
    });

    const onUserInfoChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
    };

    console.assert(values);

    return{
        form,
        onUserInfoChange
    };
}