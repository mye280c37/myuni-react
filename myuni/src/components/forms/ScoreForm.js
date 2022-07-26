import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import useScore from '../../hooks/useScore';

export default function ScoreForm() {
  const { form, onChange } = useScore();
  const { korean, english, math, society, science, history, optional, average } = form;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        과목별 점수 및 평균
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="korean"
            name="korean"
            label="국어"
            value={korean}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="english"
            name="english"
            label="영어"
            value={english}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="math"
            name="math"
            label="수학"
            value={math}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="society"
            name="society"
            label="사회"
            value={society}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="science"
            name="science"
            label="과학"
            value={science}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="history"
            name="history"
            label="한국사"
            value={history}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="optional"
            name="optional"
            label="선택"
            value={optional}
            onChange={onChange}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                id="average"
                name="average"
                label="평균 점수"
                value={average}
                onChange={onChange}
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}