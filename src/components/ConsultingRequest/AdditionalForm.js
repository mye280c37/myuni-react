import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AdditionalFormItem from './AdditionalForm/AdditionalFormItem';
import CheckBoxFormTemplate from '../forms/CheckBoxFormTemplate';
import useAdditionalInfo from "../../hooks/useAdditionalInfo";

export default function AdditionalForm({additional_info, route_known, onConsultingRequestChange}) {

  const {forms, onChange} = useAdditionalInfo(additional_info);

  useEffect(()=>{
      onConsultingRequestChange("additional_info", forms);
  }, [forms]);

  const getAdditionalFormItemArray = ()=>{
    const additionalFromItemArray = [];
    for (let key in forms){
      additionalFromItemArray.push(
        <AdditionalFormItem
        header={forms[key].header}
        title={forms[key].title}
        example={forms[key].example}
        name={key}
        value={forms[key].value}
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
            <CheckBoxFormTemplate name="route_known" values={route_known} etcIdx={3} onParentChange={onConsultingRequestChange}/>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}