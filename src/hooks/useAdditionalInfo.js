import { useState } from "react";

export default function useAdditionalInfo(values=null) {
    console.log(values);
    const [forms, setForms] = useState(values);

    const onChange = (name, value) => {
        setForms({
          ...forms,
          [name]: value          
        });
    };

    return{
        forms,
        onChange
    };
}