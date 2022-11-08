import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import FormTitle from "../common/FormTitle";
import GridFormTemplate from "../common/GridFromTemplate";

import ScoreForm from '../forms/ScoreForm';
import UniversityForm from '../forms/UniversityForm';
import useUser from "../../hooks/useUser";
import useScore from "../../hooks/useScore";
import useEssentialForm from "../../hooks/useEssentialForm";

export default function EssentialForm({score, uni_info, onConsultingRequestChange }) {
  const { user, onUserChange } = useUser();
  const { score, onScoreChange } = useScore();
  const { form, onChange } = useEssentialForm();

  return (
    <React.Fragment>
      <Typography variant="body1" sx={{ color: "darkred", mb: 5 }} gutterBottom>
        해당 페이지의 정보는 모두 필수사항입니다. 빠짐없이 채워주세요.
      </Typography>
      {/* 유저 정보 */}
      <GridFormTemplate title={'기본 정보'}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="name"
            name="name"
            label="이름"
            value={user.name}
            onChange={onUserChange}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <FormControl required variant="standard" fullWidth>
            <InputLabel id="sex_label">성별</InputLabel>
            <Select
              labelId="sex_label"
              id="sex"
              name="sex"
              label="성별"
              value={user.sex}
              onChange={onUserChange}
            >
              <MenuItem value='m'>남</MenuItem>
              <MenuItem value='w'>여</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            label="나이"
            value={user.age}
            onChange={onUserChange}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 10 }}>
          <TextField
            required
            id="phone"
            name="phone"
            label="전화번호"
            value={user.phone}
            onChange={onUserChange}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'컨설팅 선택 옵션'}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            중복선택 가능
          </Typography>
          <CheckBoxFormTemplate name="consulting_option" values={form.consultingOption} onParentChange={onConsultingChange}/>
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'지원 전형'}>
        <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            중복선택 가능
            </Typography>
            <CheckBoxFormTemplate name="application_type" etcIdx={3} values={form.applicationType} onParentChange={onConsultingChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            required
            id="reason"
            name="reason"
            label="지원 전형 선택 이유"
            onChange={onChange}
            value={form.reason}
            fullWidth
            multiline
            rows={4}
            autoComplete="shipping country"
            />
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'컨설팅 날짜'}>
        <Grid item xs={12} textAlign="left">
            <Typography variant="body1" sx={{ color: "text.secondary" }} gutterBottom>
                희망 날짜를 선택하시면 이를 기반으로 컨설턴트와 협의 후 날짜가 확정될 예정입니다.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControl required variant="standard" fullWidth>
                <InputLabel id="date">컨설팅 날짜</InputLabel>
                <Select
                    labelId="date"
                    id="date"
                    name="date"
                    value={form.desiredDate}
                    label="컨설팅 날짜"
                    onChange={onChange}
                >
                    <MenuItem value={"2022-07-29 16:00"}>2022-07-29 16:00</MenuItem>
                    <MenuItem value={"2022-07-30 15:00"}>2022-07-30 15:00</MenuItem>
                    <MenuItem value={"2022-07-30 16:00"}>2022-07-30 16:00</MenuItem>
                    <MenuItem value={"2022-08-01 15:00"}>2022-08-01 15:00</MenuItem>
                </Select>
            </FormControl>
        </Grid>
      </GridFormTemplate>
      <ScoreForm values={score} toParent={onScoreChange}/>
      <UniversityForm values={uni_info} onConsultingRequestChange={onConsultingRequestChange}/>
      <GridFormTemplate title={'참고사항'}>
        <Grid item xs={12}>
          <TextField
            required
            id="reference"
            name="reference"
            label="참고사항"
            value={form.reference}
            onChange={onChange}
            multiline
            rows={4}
            fullWidth
            autoComplete="shipping address-line1"
          />
          <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left" }}>
          컨설팅에 참고할 사항을 최대한 구체적으로 작성해주세요. (현재 상황, 학과 선정에 대한 고민, 학과나 대학에 대한 본인의 기호, 가지고 있는 자격증, 어필하고 싶은 경험, 현재 알고 있는 정보 등 사소한 것도 괜찮으니 작성 부탁드립니다!)
          </Typography>
        </Grid>
      </GridFormTemplate>
    </React.Fragment>
  );
}
