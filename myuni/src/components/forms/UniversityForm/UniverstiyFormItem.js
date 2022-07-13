import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { Container } from '@mui/system';

export default function UniversityFormItem({ priority }) {
  const uniId = "uni" + priority;
  const subjectId = "subject" + priority;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} sx={{ mt: 2 }}>
            {priority}지망
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id={uniId}
            name={uniId}
            label="대학교"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id={subjectId}
            name={subjectId}
            label="학과"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}