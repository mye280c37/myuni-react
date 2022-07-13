import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export default function UserInfoForm() {
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
              // value={age}
              label="성별"
              // onChange={handleChange}
            >
              <MenuItem value={0}>남</MenuItem>
              <MenuItem value={1}>여</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            label="나이"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            required
            id="phone"
            name="phone"
            label="전화번호"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}