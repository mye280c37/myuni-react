import { useState } from "react";

export default function useCheckBoxForm() {
    const [checkedList, setCheckedList] = useState([]);

    const [form, setForm] = useState([{
        values: checkedList,
        etc: ""
    }]);

    const onListChange = (isChecked, value)=>{
        if(isChecked){
            setCheckedList(checkedList.concat(value));
        }
        else{
            setCheckedList(checkedList.filter(item=>item!==value));
        }
        console.log(checkedList);
        setForm({
            ...form,
            ["values"]: checkedList,
        });
    }

    const onEtcChange = (e) =>{
        console.log(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }


    return{
        form,
        onListChange,
        onEtcChange
    };
}