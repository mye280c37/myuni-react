import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckBox({name, value, isEtc=false, onChange, onEtcChange}) {
    const [ isChecked, setIsChecked ] = useState(false);

    const changeCheck = (e) => {
        setIsChecked(!isChecked);
        if(isChecked){
            console.log(e.target.value);
        }
        onChange(isChecked, e.target.value);
    };

    const showAdditionalTextField = () => {
        if(isEtc && isChecked){
            return(
                <TextField
                required
                id="etc"
                name="etc"
                onChange={onEtcChange}
                label="기타"
                fullWidth
                />
            );
        }
        else{
            return(
                <React.Fragment></React.Fragment>
            );
        }
    
    };

    return (
        <React.Fragment>
            <FormControlLabel 
            control={
                <Checkbox 
                name={name}
                onChange={changeCheck} 
                value={value}
                />
            } 
            label={value}
        />
        {showAdditionalTextField()}
        </React.Fragment>
    );
}