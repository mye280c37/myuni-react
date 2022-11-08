import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAdditionalFormItem from "../../../hooks/useAdditionalFormItem";

export default function AdditionalFormItem({ header, title, example, name, value="", onParentChange }) {

  const {form, onChange} = useAdditionalFormItem({
    header: header,
    title: title,
    example: example,
    value: value
  });

  useEffect(()=>{
    onParentChange(name, form);
  }, [form]);

  return (
    <React.Fragment>
      <Typography variant="h6" sx={{ color:"darkred" }} gutterBottom>
        {header}
      </Typography>
      <Grid container spacing={3} sx={{ mb: 10 }}>
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
                id={name}
                name={name}
                label={title}
                value={form.value}
                onChange={onChange}
                fullWidth
                autoComplete="given-name"
                variant="standard"
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}