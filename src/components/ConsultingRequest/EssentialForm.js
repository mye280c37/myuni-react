import React, {useState, useEffect, useCallback} from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import axios from 'axios';

import GridFormTemplate from "../common/GridFromTemplate";
import CheckBoxFormTemplate from "../forms/CheckBoxFormTemplate";
import ScoreForm from '../forms/ScoreForm';
import UniversityForm from '../forms/UniversityForm';
import useUser from "../../hooks/useUser";
import useEssentialForm from "../../hooks/useEssentialForm";
import CustomSnackBar from "../common/CustomSnackBar";

const url = process.env.REACT_APP_API_URL;

function EssentialForm(props) {
  const { user, onUserChange } = useUser(props.values.user);
  const { form, onChange } = useEssentialForm(props.values);
  const [ availableDateList, setAvailableDateList ] = useState([]);
  const [ snackBarOpen, setSnackBarOpen ] = useState(false);
  const [ getData, setGetData ] = useState(false);

  const getAvailableDateList = useCallback(async () => {
    await axios.get(url+"/v2/available-date")
    .then(function (res) {
      if(res.status === 200) {
        setAvailableDateList(res.data.result.map((value)=>{
          return {
            key: value._id,
            value: value.date
          };
        }));
        if (res.data.result.length === 0) setSnackBarOpen(true);
      }
    })
    .catch(function (error) {
      // console.log(error);
      alert("현재 서버 오류로 신청이 불가능한 상태입니다. 관리자에게 직접 문의해주세요.");
    });
  }, []);

  const userHandler = (e) => {
    onUserChange(e);
    props.handler.user(e);
  }

  const formHandler = (e) => {
    onChange(e);
    props.handler.onEssentialChange(e);
  }

  useEffect(()=>{
    if (!getData){
      getAvailableDateList();
    }
    setGetData(true);
  },[getData, getAvailableDateList]);

  return (
    <React.Fragment>
      <CustomSnackBar open={snackBarOpen} onClose={()=>setSnackBarOpen(false)} title={"지금 너무 예약 신청이 많이 들어와 홈페이지로는 신청을 받지 않고 있으니 메일로 연락 주시길 바랍니다. (imaginemyuni@gmail.com)"} ></CustomSnackBar>
      <Typography variant="body1" sx={{ color: "darkred", mb: 5 }} gutterBottom>
        해당 페이지의 정보는 모두 필수사항입니다. 빠짐없이 채워주세요.
      </Typography>
      {/* 유저 정보 */}
      <GridFormTemplate title={'기본 정보'}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="name"
            name="name"
            label="이름"
            value={user.name}
            onChange={userHandler}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <FormControl required variant="standard" fullWidth>
            <InputLabel id="sex_label">성별</InputLabel>
            <Select
              labelId="sex_label"
              id="sex"
              name="sex"
              label="성별"
              value={user.sex}
              onChange={userHandler}
            >
              <MenuItem value='m'>남</MenuItem>
              <MenuItem value='w'>여</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            label="나이"
            value={user.age}
            onChange={userHandler}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="전화번호"
            value={user.phone}
            onChange={userHandler}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'컨설팅 선택 옵션'}>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            중복선택 가능
          </Typography>
          <CheckBoxFormTemplate name="consultingOption" values={form.consultingOption} onParentChange={props.handler.onCheckBoxFormChange}/>
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'지원 전형'}>
        <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            중복선택 가능
            </Typography>
            <CheckBoxFormTemplate name="applicationType" etcIdx={3} values={form.applicationType} onParentChange={props.handler.onCheckBoxFormChange}/>
        </Grid>
        <Grid item xs={12}>
            <TextField
            required
            id="reason"
            name="reason"
            label="지원 전형 선택 이유"
            onChange={formHandler}
            value={form.reason}
            fullWidth
            multiline
            rows={4}
            autoComplete="shipping country"
            />
        </Grid>
      </GridFormTemplate>
      <GridFormTemplate title={'컨설팅 날짜'}>
        <Grid item xs={12}>
            {availableDateList.length === 0
            ? <Typography variant="body2" color={"darkred"} sx={{ pb: 3 }}>선택 가능한 날짜가 없습니다.</Typography>
            : <Typography variant="body2" color={"text.secondary"} sx={{ pb: 3 }}>희망하시는 컨설팅 날짜를 선택하시면 이를 바탕으로 협의 후 컨설팅 날짜가 정해집니다.</Typography>
            }
            <FormControl required variant="standard" fullWidth >
              <InputLabel id="date">컨설팅 날짜</InputLabel>
              <Select
                  labelId="desiredDate"
                  id="desiredDate"
                  name="desiredDate"
                  value={form.desiredDate}
                  label="컨설팅 날짜"
                  onChange={formHandler}
              >
                {availableDateList.map((item)=>{
                  return <MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>
                })}
              </Select>
            </FormControl>
        </Grid>
      </GridFormTemplate>
      <ScoreForm values={props.values.score} handler={props.handler.score}/>
      <UniversityForm values={props.values.uni} handler={props.handler.uni}/>
      <GridFormTemplate title={'참고사항'}>
        <Grid item xs={12}>
          <TextField
            required
            id="reference"
            name="reference"
            label="참고사항"
            value={form.reference}
            onChange={formHandler}
            multiline
            rows={4}
            fullWidth
            autoComplete="shipping address-line1"
          />
          <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left" }}>
          컨설팅에 참고할 사항을 최대한 구체적으로 작성해주세요. (현재 상황, 학과 선정에 대한 고민, 학과나 대학에 대한 본인의 기호, 가지고 있는 자격증, 어필하고 싶은 경험, 현재 알고 있는 정보 등 사소한 것도 괜찮으니 작성 부탁드립니다!)
          </Typography>
        </Grid>
      </GridFormTemplate>
    </React.Fragment>
  );
}

EssentialForm.propTypes = {
  values: PropTypes.object,
  handler: PropTypes.object
}

export default EssentialForm;