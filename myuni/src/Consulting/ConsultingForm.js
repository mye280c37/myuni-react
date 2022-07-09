import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import UserInfoForm from './ConsultingForm/UserInfoForm';
import ScoreForm from './ConsultingForm/ScoreForm';
import UniversityForm from './ConsultingForm/UniversityForm';

export default function ConsultingForm() {
  return (
    <React.Fragment>
      <Typography variant="body1" sx={{ color: "darkred", mb: 5 }} gutterBottom>
        해당 페이지의 정보는 모두 필수사항입니다. 빠짐없이 채워주세요.
      </Typography>
      <UserInfoForm/>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          컨설팅 선택 옵션
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            중복선택 가능
            </Typography>
            <FormControl required variant="standard" fullWidth>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="수시 지원" />
                <FormControlLabel control={<Checkbox />} label="자기소개서 컨설팅" />
                <FormControlLabel control={<Checkbox />} label="면접 컨설팅" />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          지원 전형
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
              중복선택 가능
            </Typography>
            <FormControl required variant="standard" fullWidth>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="학생부 교과(검정고시 성적)" />
                <FormControlLabel control={<Checkbox />} label="학생부 교과 면접(검정고시 성적 + 면접)" />
                <FormControlLabel control={<Checkbox />} label="정시(수능)" />
                <FormControlLabel control={<Checkbox />} label="기타" />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="reason"
              name="reason"
              label="지원 전형 선택 이유"
              fullWidth
              multiline
              rows={4}
              autoComplete="shipping country"
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          컨설팅 날짜
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} textAlign="left">
            <Typography variant="body1" gutterBottom>
                희망 날짜를 선택하시면 이를 기반으로 컨설턴트와 협의 후 날짜가 확정될 예정입니다.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl required variant="standard" fullWidth>
              <InputLabel id="date">컨설팅 날짜</InputLabel>
              <Select
                labelId="date"
                id="date"
                // value={age}
                label="컨설팅 날짜"
                // onChange={handleChange}
              >
                <MenuItem value={0}>2022-07-29 16:00</MenuItem>
                <MenuItem value={0}>2022-07-30 15:00</MenuItem>
                <MenuItem value={0}>2022-07-30 16:00</MenuItem>
                <MenuItem value={0}>2022-08-01 15:00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
      <ScoreForm/>
      <UniversityForm/>
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
