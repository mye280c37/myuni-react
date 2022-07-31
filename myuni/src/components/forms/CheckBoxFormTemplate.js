import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import CustomCheckBox from "../common/CustomCheckBox";
import useCheckBoxForm from "../../hooks/useCheckBoxForm";

export default function CheckBoxFormTemplate({ name, etcIdx=-1, values, onParentChange }) {

  const {form, onListChange, onEtcChange} = useCheckBoxForm();

  const onCheckBoxFormChange = (isChecked, value) =>{
    onListChange(isChecked, value);
    console.log(form);
    onParentChange(name, form);
  }

  const showEntireCheckBox= () =>{
    const checkboxList=[];

    values.map((value, idx)=>{
      if(etcIdx === idx){
        checkboxList.push(
          <CustomCheckBox name={name} value={value} isEtc={true} onChange={onCheckBoxFormChange} onEtcChange={onEtcChange}/>
        );
      }
      else{
        checkboxList.push(
          <CustomCheckBox name={name} value={value} onChange={onCheckBoxFormChange}/>
        );
      }
    })

    return checkboxList;
  }
  
  return (
    <React.Fragment>
        <FormControl required variant="standard" fullWidth>
          <FormGroup>
              {showEntireCheckBox()}
          </FormGroup>
        </FormControl>
      </React.Fragment>
  );
}