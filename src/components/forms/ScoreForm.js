import React from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import useScore from '../../hooks/useScore';
import GridFormTemplate from "../common/GridFromTemplate";

function ScoreForm(props) {
  const { score: form, onScoreChange: onChange } = useScore(props.values);
  const { korean, english, math, society, science, history, optional, average } = form;

  const formHandler = (e) => {
    onChange(e);
    props.handler(e);
  }

  return (
    <GridFormTemplate title={"과목별 점수 및 평균"}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="korean"
            name="korean"
            label="국어"
            value={korean}
            onChange={formHandler}
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
            onChange={formHandler}
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
            onChange={formHandler}
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
            onChange={formHandler}
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
            onChange={formHandler}
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
            onChange={formHandler}
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
            onChange={formHandler}
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
                onChange={formHandler}
                fullWidth
                autoComplete="shipping country"
                variant="standard"
            />
        </Grid>
    </GridFormTemplate>
  );
}

ScoreForm.propTypes = {
  values: PropTypes.object,
  handler: PropTypes.func
}

export default ScoreForm;