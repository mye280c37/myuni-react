import { useState } from "react";

export default function useUniversityItem(values=null) {
    const [ uni, setUni ] = useState({
        university: (values === null)? "": values.university,
        major: (values === null)? "": values.major
    });

    const onUniChange = (e) => {
        setUni({
            ...uni,
            university: e.target.value,
        });
    };
    
    const onMajorChange = (e) => {
        setUni({
            ...uni,
            major: e.target.value
        });
    };

    return{
        uni,
        onUniChange,
        onMajorChange
    };
}