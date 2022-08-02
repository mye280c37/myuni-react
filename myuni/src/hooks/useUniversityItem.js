import { useState } from "react";

export default function useUniversityItem(values=null) {
    const [ uni, setUni ] = useState({
        university: (values === null)? "": values.university,
        subject: (values === null)? "": values.subject
    });

    const onUniChange = (e) => {
        setUni({
            ...uni,
            university: e.target.value,
        });
    };
    
    const onSubjectChange = (e) => {
        setUni({
          ...uni,
          subject: e.target.value
        });
    };

    return{
        uni,
        onUniChange,
        onSubjectChange
    };
}