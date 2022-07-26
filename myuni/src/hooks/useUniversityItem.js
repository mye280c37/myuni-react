import { useState } from "react";

export default function useUniversityItem(priority) {
    const [ uni, setUni ] = useState({
        priority: priority,
        university: "",
        subject: ""
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