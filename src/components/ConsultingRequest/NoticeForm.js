import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export default function NoticeForm({ refund_account, onRefundAccountChange, onConsultingRequestChange }) {
  return (
    <React.Fragment>
        <Typography variant="h6" sx={{ mb: 4 }} gutterBottom>
            컨설팅 진행 전 공지사항
        </Typography>
      <React.Fragment>
        <Typography variant="body1" sx={{ textAlign: "left", color:"darkred" }} gutterBottom>
        첨삭을 위한 자기소개서는 컨설팅 3일 전까지 imaginemyuni@gmail.com으로 보내주세요.*
        </Typography>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left" }} gutterBottom>
            제목: [자기소개서_000(이름)], 형식: 한글/워드, 파일 상단에 지원하고자 하는 학교와 학과를 명시해주시고, 문항도 함께 작성해주세요.
            </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="noticeCheck"
                    name="check"
                >
                    <FormControlLabel value="check" control={<Radio />} label="확인했습니다." />
                </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Typography variant="body1" sx={{ textAlign: "left", color:"darkred" }} gutterBottom>
        컨설팅 비용은 25만원이며, 컨설팅 신청서 작성 여부 및 입금 확인 후 컨설팅 진행합니다.*
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
        계좌번호: 1002-857-980326 우리은행 강예은<br/>
        입금자명: 진학 컨설팅 000 ⇒ 진학 컨설팅 강예은 (학생 본인의 이름을 넣어주시면 됩니다.)
        </Typography>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "left", p: 2, border: "1px solid grey" }} gutterBottom>
             수집하는 개인정보 항목<br/>
            회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br/>
             수집항목: 이름, 연락처, 문의내용, 쿠키 등<br/>
             개인정보 수집방법: 홈페이지(상담신청)<br/>
            <br/>
             개인정보의 수집 및 이용목적<br/>
            수집한 개인정보를 다음의 목적을 위해 활용합니다.<br/>
             서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 콘텐츠 제공, 문의 및 불만사항 처리<br/>
            <br/>
             개인정보의 보유 및 이용기간<br/>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br/>
             보존 항목: 이름, 연락처, 문의내용<br/>
             보존 근거: 서비스 이용의 혼선 방지<br/>
             보존 기간: 5년 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br/>
             계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)<br/>
             대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)<br/>
             소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)<br/>
            </Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="noticeCheck"
                    name="check"
                >
                    <FormControlLabel value="check" control={<Radio />} label="확인했습니다." />
                </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
            환불 계좌
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="refund_account"
              name="refund_account"
              value={refund_account}
              label="환불계좌"
              onChange={onRefundAccountChange}
              fullWidth
              autoComplete="shipping address-line1"
            />
            <Typography variant="body2" gutterBottom sx={{ color: "darkred", textAlign: "left" }}>
            - 컨설팅 당일 예약 변경 및 취소는 불가능합니다.<br/>
            - 컨설팅 예약일로부터 2일 전까지 예약 변경 및 취소 시 컨설팅 비용의 50%가 과금 됩니다.
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  );
}
