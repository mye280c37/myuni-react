import { useState } from "react";

export default function useUniversity(values=null) {
    const uniList = (values === null)? {
        1:{
            university: "",
            major: ""
        },
        2:{
            university: "",
            major: ""
        },
        3:{
            university: "",
            major: ""
        },
        4:{
            university: "",
            major: ""
        },
        5:{
            university: "",
            major: ""
        },
        6:{
            university: "",
            major: ""
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