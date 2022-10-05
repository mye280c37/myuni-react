import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import useUniversityItem from "../../../hooks/useUniversityItem";

export default function UniversityFormItem({ priority, values, setUniList }) {
  const uniId = "uni" + priority;
  const majorId = "major" + priority;

  const { uni, onUniChange, onSubjectChange } = useUniversityItem(values);
  const { university, major } = uni;

  useEffect(()=>{
    console.log('useEffect');
    setUniList(priority, uni);
  }, [university, major]); 

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
            value={university}
            onChange={onUniChange}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id={majorId}
            name={majorId}
            label="학과"
            value={major}
            onChange={onSubjectChange}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}