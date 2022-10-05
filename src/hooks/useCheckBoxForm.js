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
        console.log(form);
      };

    const onEtcChange = (e) =>{
        console.log(e.target.value);
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