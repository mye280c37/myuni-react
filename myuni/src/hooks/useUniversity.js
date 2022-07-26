import { useState } from "react";

export default function useUniversity() {

    const [ uniList, setUniList ] = useState([]);

    const [ form, setForm ] = useState({
        uni_list: uniList,
        reason: ""
      });

    const onReasonChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onUniListChange = (uni) => {
        const {priority, university, subject } = uni;
        // console.log(uni);
        const targ = uniList.filter(item=>item.priority===priority);
        if (targ.length !== 0){
            setUniList(
                uniList.map(
                    item => item.priority === priority ? {...item, university: university, subject: subject } : item
                )
            );
        }
        else{
            setUniList(uniList.concat(uni));
        }
        
        setForm({
            ...form,
            uni_list: uniList
        });
    };

    return{
        form,
        onReasonChange,
        onUniListChange,
    };
}