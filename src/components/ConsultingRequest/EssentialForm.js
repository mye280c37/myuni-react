import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import UserInfoForm from '../forms/UserInfoForm';
import ConsultingForm from '../forms/ConsultingForm';
import ScoreForm from '../forms/ScoreForm';
import UniversityForm from '../forms/UniversityForm';

export default function EssentialForm({user_info, consulting, score, uni_info, reference, onConsultingRequestChange, onReferenceChange}) {

  return (
    <React.Fragment>
      <Typography variant="body1" sx={{ color: "darkred", mb: 5 }} gutterBottom>
        해당 페이지의 정보는 모두 필수사항입니다. 빠짐없이 채워주세요.
      </Typography>
      <UserInfoForm values={user_info} onConsultingRequestChange={onConsultingRequestChange}/>
      <ConsultingForm values={consulting} onConsultingRequestChange={onConsultingRequestChange} />
      <ScoreForm values={score} onConsultingRequestChange={onConsultingRequestChange}/>
      <UniversityForm values={uni_info} onConsultingRequestChange={onConsultingRequestChange}/>
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
              value={reference}
              onChange={onReferenceChange}
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
