import { useState } from "react";

export default function useCheckBoxForm(values=null) {
    const [form, setForm] = useState({
        checked: (values === null)? {}: values.checked,
        labels: (values === null)? []: values.labels,
        etc: (values === null)? "": values.etc
    });

    const onCheckedChange = (e) => {
        setForm({
          ...form,
          checked:{
            ...form.checked,
            [e.target.name]: e.target.checked,
          }
          
        });
      };

    const onEtcChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    return{
        form,
        onCheckedChange,
        onEtcChange
    };
}