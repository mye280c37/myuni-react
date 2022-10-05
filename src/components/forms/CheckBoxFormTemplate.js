import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import useCheckBoxForm from "../../hooks/useCheckBoxForm";

export default function CheckBoxFormTemplate({ name, etcIdx=-1, values, onParentChange }) {

  const {form, onCheckedChange, onEtcChange} = useCheckBoxForm(values);
  const {checked, labels, etc} = form;

  useEffect(()=>{
      onParentChange(name, form);
  }, [checked, etc]);
  
  const showAdditionalTextField = () => {
      if(etcIdx!==-1 && checked[etcIdx]){
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
  };

  const showEntireCheckBox= () =>{
    const checkboxList=[];

    labels.map((value, idx)=>{
      if(etcIdx !== idx){
        checkboxList.push(
          <FormControlLabel
            control={
              <Checkbox name={idx} checked={checked[idx]} onChange={onCheckedChange}/>
            }
            label={value}
          />
          
        );
      }
      else{
        checkboxList.push(
          <React.Fragment>
            <FormControlLabel
              control={
                <Checkbox name={idx} checked={checked[idx]} onChange={onCheckedChange}/>
              }
              label={value}
            />
            {showAdditionalTextField()}
          </React.Fragment>
        );
      }
    })

    return checkboxList;
  };
  
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