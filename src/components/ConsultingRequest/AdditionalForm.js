import React from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AdditionalFormItem from './AdditionalForm/AdditionalFormItem';
import CheckBoxFormTemplate from '../forms/CheckBoxFormTemplate';

function AdditionalForm(props) {

  const getAdditionalFormItemArray = ()=>{
    const additionalFromItemArray = [];
    for (let key in props.values.additionalInfo){
      additionalFromItemArray.push(
        <AdditionalFormItem
        header={props.values.additionalInfo[key].header}
        title={props.values.additionalInfo[key].title}
        example={props.values.additionalInfo[key].example}
        name={key}
        value={props.values.additionalInfo[key].value}
        onParentChange={props.handler.additionalInfo}
        />
      );
    }
    return additionalFromItemArray;
  };

  return (
    <React.Fragment>
      {getAdditionalFormItemArray()}
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
        진학 컨설팅 MY UNI를 알게 되신 경로
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
              중복선택 가능
            </Typography>
            <CheckBoxFormTemplate name="routeKnown" values={props.values.routeKnown} etcIdx={3} onParentChange={props.handler.routeKnown}/>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}

AdditionalForm.propTypes = {
  values: PropTypes.object,
  handler: PropTypes.object
}

export default AdditionalForm;