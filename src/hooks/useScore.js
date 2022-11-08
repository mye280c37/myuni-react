import { useState } from "react";

export default function useScore(values=null) {
    const [ score, setScore ] = useState({
        korean: values === null? "": values.korean,
        english: values === null? "": values.english,
        math: values === null? "": values.math,
        society: values === null? "": values.society,
        science: values === null? "": values.science,
        history: values === null? "": values.history,
        optional: values === null? "": values.optional,
        average: values === null? "": values.average
    });

    const onScoreChange = (e) => {
        const { name, value } = e.target;
        setScore({
            ...score,
            [name]: value,
        });
    }

    return{
        form: score,
        onScoreChange
    };
}