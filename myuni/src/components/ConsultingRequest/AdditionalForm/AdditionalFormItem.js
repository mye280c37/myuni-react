import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export default function AdditionalFormItem({ header, title, example }) {
  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ color:"darkred" }} gutterBottom>
        {header}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} textAlign="left">
            <Typography variant="body1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color:"text.secondary" }} gutterBottom>
                {example}
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
            <TextField
                id="option1"
                name="option1"
                label={title}
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}