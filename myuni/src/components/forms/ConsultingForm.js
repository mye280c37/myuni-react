import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import EtcCheckBox from "../common/CustomCheckBox";
import useConsulting from "../../hooks/useConsulting";
import CheckBoxFormTemplate from "./CheckBoxFormTemplate";

export default function ConsultingForm({onConsultingRequestChange}) {

    const { form, onConsultingChange } = useConsulting();
    const {consulting_option, application_type, reason, date} = form;

    const consulting_option_values=["수시 지원", "자기소개서 컨설팅", "면접 컨설팅"];
    const application_type_values=["학생부 교과(검정고시 성적)", "학생부 교과 면접(검정고시 성적 + 면접)", "정시(수능)", "기타"];

    const onCheckBoxChange = (name, value) => {
        onConsultingChange(name, value);
        console.log(value);
        onConsultingRequestChange("consulting", form);
    }
    
    const onChange = (e) => {
        onConsultingChange(e.target.name, e.target.value);
        onConsultingRequestChange("consulting", form);
    }
    
    return (
    <React.Fragment>
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
            컨설팅 선택 옵션
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
                    중복선택 가능
                    </Typography>
                    <CheckBoxFormTemplate name="consulting_option" values={consulting_option_values} onParentChange={onCheckBoxChange}/>
                </Grid>
            </Grid>
        </React.Fragment>
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                지원 전형
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
                    중복선택 가능
                    </Typography>
                    <CheckBoxFormTemplate name="application_type" etcIdx={3} values={application_type_values} onParentChange={onCheckBoxChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id="reason"
                    name="reason"
                    label="지원 전형 선택 이유"
                    onChange={onChange}
                    value={reason}
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="shipping country"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            컨설팅 날짜
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} textAlign="left">
                    <Typography variant="body1" gutterBottom>
                        희망 날짜를 선택하시면 이를 기반으로 컨설턴트와 협의 후 날짜가 확정될 예정입니다.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl required variant="standard" fullWidth>
                        <InputLabel id="date">컨설팅 날짜</InputLabel>
                        <Select
                            labelId="date"
                            id="date"
                            name="date"
                            value={date}
                            label="컨설팅 날짜"
                            onChange={onChange}
                        >
                            <MenuItem value={"2022-07-29 16:00"}>2022-07-29 16:00</MenuItem>
                            <MenuItem value={"2022-07-30 15:00"}>2022-07-30 15:00</MenuItem>
                            <MenuItem value={"2022-07-30 16:00"}>2022-07-30 16:00</MenuItem>
                            <MenuItem value={"2022-08-01 15:00"}>2022-08-01 15:00</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    </React.Fragment>
  );
}
