import { useState } from "react";

export default function useUser(values=null) {

    const [ user, setUser ] = useState({
        name: values === null? "": values.name,
        sex: values === null? "": values.sex,
        age: values === null? "": values.age,
        phone: values === null? "": values.phone
    });

    const onUserChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return{
        user,
        onUserChange
    };
}