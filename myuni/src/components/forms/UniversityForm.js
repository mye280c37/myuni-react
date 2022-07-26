import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { Container } from '@mui/system';

import UniversityFormItem from './UniversityForm/UniverstiyFormItem';

function getUniveristyFormItemArray(num) {
  let arr = [];
  for(let i = 1; i <= num; i++){
    arr.push(<UniversityFormItem priority={i}/>)
  }
  return arr;
}

export default function UniversityForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        지망 학교 및 학과
      </Typography>
      <Grid container sx={{ mb: 2 }}>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
        원활한 컨설팅을 위해 최대한 채워주세요. 미입력시 미정으로 저장됩니다. 
        </Typography>
      </Grid>
      {getUniveristyFormItemArray(6)}
      </Grid>
      <Grid container>
          <TextField
              required
              id="reason"
              name="reason"
              label="학교 및 학과 선정 이유"
              fullWidth
              multiline
              rows={4}
              autoComplete="shipping country"
          />
        </Grid>
        <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left" }}>
          위의 학교/학과 지원을 희망하는 이유를 가능한 자세히 적어주세요.
        </Typography>
    </React.Fragment>
  );
}