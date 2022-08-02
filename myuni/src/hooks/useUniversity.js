import { useState } from "react";

export default function useUniversity(values=null) {
    const uniList = (values === null)? {
        1:{
            university: "",
            subject: ""
        },
        2:{
            university: "",
            subject: ""
        },
        3:{
            university: "",
            subject: ""
        },
        4:{
            university: "",
            subject: ""
        },
        5:{
            university: "",
            subject: ""
        },
        6:{
            university: "",
            subject: ""
        }

    }: values.uni_list;

    const [ form, setForm ] = useState({
        uni_list: uniList,
        reason: values === null? "": values.reason
      });

    const onReasonChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onUniListChange = (priority, uni) => {
        setForm({
            ...form,
            uni_list: {
                ...form.uni_list,
                [priority]: uni
            }
        });
    };

    console.log(values);

    return{
        form,
        onReasonChange,
        onUniListChange,
    };
}