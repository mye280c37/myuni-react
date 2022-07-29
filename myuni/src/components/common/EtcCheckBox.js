import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function EtcCheckBox({name}) {
    const [ isChecked, setIsChecked ] = useState(false);
    const changeCheck = () => {
        setIsChecked((isChecked) => !isChecked);
    };
    const showAdditionalTextField = () => {
        if(isChecked){
            return(
                <TextField
                required
                id="etc"
                name="etc"
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
                value={"기타"} 
                />
            } 
            label="기타" 
        />
        {showAdditionalTextField()}
        </React.Fragment>
    );
}