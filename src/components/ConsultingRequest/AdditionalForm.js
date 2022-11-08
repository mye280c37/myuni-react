import React from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AdditionalFormItem from './AdditionalForm/AdditionalFormItem';
import CheckBoxFormTemplate from '../forms/CheckBoxFormTemplate';
import useAdditionalForm from "../../hooks/useAdditionalForm";

function AdditionalForm(props) {

  const {form, onChange} = useAdditionalForm(props.values);
  const {additionalInfo, routeKnown} = form;

  const getAdditionalFormItemArray = ()=>{
    const additionalFromItemArray = [];
    for (let key in additionalInfo){
      additionalFromItemArray.push(
        <AdditionalFormItem
        header={additionalInfo[key].header}
        title={additionalInfo[key].title}
        example={additionalInfo[key].example}
        name={key}
        value={additionalInfo[key].value}
        onParentChange={onChange}
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
            <CheckBoxFormTemplate name="routeKnown" values={routeKnown} etcIdx={3} onParentChange={props.handler}/>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}

AdditionalForm.propTypes = {
  values: PropTypes.object,
  handler: PropTypes.func
}

export default AdditionalForm;