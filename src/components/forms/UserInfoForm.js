import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import useUserInfo from '../../hooks/useUserInfo';

export default function UserInfoForm({ values, onConsultingRequestChange }) {
  const { form, onUserInfoChange } = useUserInfo(values);
  const { name, sex, age, phone } = form;

  const validation =()=>{
    let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    return check.test(phone);
  };

  useEffect(()=>{
    onConsultingRequestChange('user_info', form);
  }, [name, sex, age, phone]); 

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        기본 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="name"
            name="name"
            label="이름"
            value={name}
            onChange={onUserInfoChange}
            error={name===""?true:false}
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
              value={sex}
              error={sex===""?true:false}
              onChange={onUserInfoChange}
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
            value={age}
            error={age===null?true:false}
            helperText="helper text"
            onChange={onUserInfoChange}
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
            value={phone}
            error={validation()}
            helperText={validation() ? "특수기호나 한글은 입력 하실 수 없습니다.":""}
            onChange={onUserInfoChange}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}