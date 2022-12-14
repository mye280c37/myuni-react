import React from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import UniversityFormItem from './UniversityForm/UniverstiyFormItem';
import useUniversity from "../../hooks/useUniversity";

function UniversityForm(props) {
  const { form, onReasonChange, onUniListChange } = useUniversity(props.values);

  const reasonHandler = (e) => {
    onReasonChange(e);
    props.handler.reason(e);
  }

  const listHandler = (priority, uni) => {
    onUniListChange(priority, uni);
    props.handler.list(priority, uni);
  }
  
  const getUniveristyFormItemArray = (num) => {
    let arr = [];
    for(let i = 1; i <= num; i++){
      arr.push(<UniversityFormItem priority={i} values={form[i]} setUniList={listHandler} />);
    }
    return arr;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        지망 학교 및 학과
      </Typography>
      <Grid container sx={{ mb: { xs: 2, md: 4 } }}>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ color: "text.secondary" }} gutterBottom>
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
              value={form.reason}
              onChange={reasonHandler}
              label="학교 및 학과 선정 이유"
              fullWidth
              multiline
              rows={4}
              autoComplete="shipping country"
          />
        </Grid>
        <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left", mb: 10 }}>
          위의 학교/학과 지원을 희망하는 이유를 가능한 자세히 적어주세요.
        </Typography>
    </React.Fragment>
  );
}

UniversityForm.propsType = {
  values: PropTypes.object,
  handler: PropTypes.object
}

export default UniversityForm;