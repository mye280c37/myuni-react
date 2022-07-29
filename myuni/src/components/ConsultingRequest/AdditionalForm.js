import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import AdditionalFormItem from './AdditionalForm/AdditionalFormItem';
import EtcCheckBox from '../common/EtcCheckBox';

export default function AdditionalForm() {
  return (
    <React.Fragment>
      <AdditionalFormItem
        header="제 1회 검정고시(04.09) 응시자 필수 답변"
        title="제 1회 검정고시 응시 과목"
        example="예시) 수학, 과학"
        />
      <AdditionalFormItem
        header="2023 수능 응시자 필수 답변"
        title="모의고사 등급을 작성해주세요."
        example="예시) 국어 1 영어 1 수학 1 한국사 1 사탐(세계지리 1 사회문화 1) 아랍어 1"
        />
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
        진학 컨설팅 MY UNI를 알게 되신 경로
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
              중복선택 가능
            </Typography>
            <FormControl required variant="standard" fullWidth>
              <FormGroup>
                <FormControlLabel control={<Checkbox name="route_known" />} label="센터 대학입시 설명회" />
                <FormControlLabel control={<Checkbox name="route_known" />} label="유튜브 채널" />
                <FormControlLabel control={<Checkbox name="route_known" />} label="지인 소개" />
                <EtcCheckBox name="route_known"/>
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}