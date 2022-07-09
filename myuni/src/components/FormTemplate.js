import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export default function FormTemplate({ title, contents }) {
  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={3}>
          {contents}
        </Grid>
      </React.Fragment>
  );
}