import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import useConsulting from "../../hooks/useConsulting";
import CheckBoxFormTemplate from "./CheckBoxFormTemplate";

export default function ConsultingForm({values, onConsultingRequestChange}) {

    const { form, onConsultingChange } = useConsulting(values);
    const {consulting_option, application_type, reason, date} = form;

    useEffect(()=>{
        onConsultingRequestChange("consulting", form);
    }, [consulting_option, application_type, reason, date]); 
    
    const onChange = (e) => {
        onConsultingChange(e.target.name, e.target.value);
    }
    
    return (
    <React.Fragment>
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
            컨설팅 선택 옵션
            </Typography>
            <Grid container spacing={3} sx={{ mb: 10 }}>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
                    중복선택 가능
                    </Typography>
                    <CheckBoxFormTemplate name="consulting_option" values={consulting_option} onParentChange={onConsultingChange}/>
                </Grid>
            </Grid>
        </React.Fragment>
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                지원 전형
            </Typography>
            <Grid container spacing={3} sx={{ mb: 10 }}>
                <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
                    중복선택 가능
                    </Typography>
                    <CheckBoxFormTemplate name="application_type" etcIdx={3} values={application_type} onParentChange={onConsultingChange}/>
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
            <Grid container spacing={3} sx={{ mb: 10 }}>
                <Grid item xs={12} textAlign="left">
                    <Typography variant="body1" sx={{ color: "text.secondary" }} gutterBottom>
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
