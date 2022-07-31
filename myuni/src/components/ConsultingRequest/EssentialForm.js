import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import UserInfoForm from '../forms/UserInfoForm';
import ConsultingForm from '../forms/ConsultingForm';
import ScoreForm from '../forms/ScoreForm';
import UniversityForm from '../forms/UniversityForm';

export default function EssentialForm({onConsultingRequestChange}) {

  return (
    <React.Fragment>
      <Typography variant="body1" sx={{ color: "darkred", mb: 5 }} gutterBottom>
        해당 페이지의 정보는 모두 필수사항입니다. 빠짐없이 채워주세요.
      </Typography>
      <UserInfoForm onConsultingRequestgChange={onConsultingRequestChange}/>
      <ConsultingForm onConsultingRequestChange={onConsultingRequestChange} />
      <ScoreForm/>
      <UniversityForm onConsultingRequestChange={onConsultingRequestChange}/>
      <React.Fragment>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          참고사항
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="reference"
              name="reference"
              label="참고사항"
              multiline
              rows={4}
              fullWidth
              autoComplete="shipping address-line1"
            />
            <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left" }}>
            컨설팅에 참고할 사항을 최대한 구체적으로 작성해주세요. (현재 상황, 학과 선정에 대한 고민, 학과나 대학에 대한 본인의 기호, 가지고 있는 자격증, 어필하고 싶은 경험, 현재 알고 있는 정보 등 사소한 것도 괜찮으니 작성 부탁드립니다!)
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}
