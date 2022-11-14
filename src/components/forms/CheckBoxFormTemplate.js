import React, {useEffect} from "react";
import TextField from '@mui/material/TextField';
import { FormControl, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import useCheckBoxForm from "../../hooks/useCheckBoxForm";

export default function CheckBoxFormTemplate({ name, etcIdx=-1, values, onParentChange }) {

  const {form, onCheckedChange, onEtcChange} = useCheckBoxForm(values);
  const {checked, labels, etc} = form;

  useEffect(()=>{
    onParentChange(name, form);
  }, [checked, etc, form, name, onParentChange]); 
  
  const showAdditionalTextField = () => {
      if(etcIdx!==-1 && checked[etcIdx]){
          return(
              <TextField
              required
              id="etc"
              name="etc"
              value={etc}
              onChange={onEtcChange}
              label="기타"
              fullWidth
              />
          );
      }
  };
  
  return (
    <React.Fragment>
        <FormControl required variant="standard" fullWidth>
          <FormGroup>
              {
                labels.map((value, idx) => {
                  return (
                    <React.Fragment>
                      <FormControlLabel
                        control={
                          <Checkbox name={idx} checked={checked[idx]} onChange={onCheckedChange}/>
                        }
                        label={value}
                      />
                      {idx===etcIdx?showAdditionalTextField():<Typography></Typography>}
                    </React.Fragment>
                  );
                })
              }
          </FormGroup>
        </FormControl>
      </React.Fragment>
  );
}