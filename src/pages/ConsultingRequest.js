import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import EssentialForm from '../components/ConsultingRequest/EssentialForm';
import AdditionalForm from '../components/ConsultingRequest/AdditionalForm';
import NoticeForm from '../components/ConsultingRequest/NoticeForm';
import CustomLink from '../components/common/CustomLink';
import axios from 'axios';

import useUser from '../hooks/useUser';
import useUniversity from '../hooks/useUniversity';
import useScore from '../hooks/useScore';
import useEssentialForm from '../hooks/useEssentialForm';
import useAdditionalForm from '../hooks/useAdditionalForm';

const steps = ['필수 정보', '추가 정보', '공지사항 확인'];

function getStepContent(step, form, formHandler) {

  const { essential, additional, notice } = form;
  const { essential: essentialHandler, additional: additionalHandler, notice: noticeHandler} = formHandler;

  switch (step) {
    case 0:
      return <EssentialForm
                values={essential}
                handler={essentialHandler}
                />;
    case 1:
      return <AdditionalForm
                values={additional}
                handler={additionalHandler}
                />;
    case 2:
      return <NoticeForm
                values={notice}
                handler={noticeHandler}
              />;
    default:
      throw new Error('Unknown step');
  }
}

export default function ConsultingRequest() {
  const [activeStep, setActiveStep] = React.useState(0);

  const {user, onUserChange} = useUser();
  const {score, onScoreChange} = useScore();
  const {form: desiredUni, onReasonChange, onUniListChange} = useUniversity();
  const {form: essentialForm, onChange: onEssentialChange, onCheckBoxFormChange} = useEssentialForm();
  const {form: additionalForm, onChange: onAdditionalChange} = useAdditionalForm();
  const [refundAccount, setRefundAccount] = React.useState("");

  const essentialFormSet = {
    user: user,
    score: score,
    uni: desiredUni,
    ...essentialForm
  };

  const essentialFormHandler = {
    user: onUserChange,
    score: onScoreChange,
    uni: {
      list: onUniListChange,
      reason: onReasonChange
    },
    onEssentialChange: onEssentialChange,
    onCheckBoxFormChange: onCheckBoxFormChange
  };

  const consultingRequestForm = {
    essential: essentialFormSet,
    additional: additionalForm,
    notice: refundAccount
  };

  const consulitngRequestHandler = {
    essential: essentialFormHandler,
    additional: onAdditionalChange,
    notice: setRefundAccount
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log({
      user: user,
      score: score,
      uni: desiredUni,
      ...essentialForm,
      ...additionalForm
    });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSubmit = () => {
    alert("신청");
    console.log("신청");
    // axios.post(
    //   "https://api.hellomyuni.com/v2/consulting-request", {
    //     user: user,
    //     score: score,
    //     uni: desiredUni,
    //     ...essentialForm,
    //     ...additionalForm
    //   }
    // );
    console.log({
      user: user,
      score: score,
      uni: desiredUni,
      ...essentialForm,
      ...additionalForm,
      refundAccount: refundAccount
    });
  };

  return (
    <React.Fragment>
      <AppBar
        color="default"
        elevation={0}
        sx={{
          position: 'fixed',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Button onClick={() => alert('페이지를 나가시면 작성한 내용이 저장되지 않습니다')}>
            <Typography variant="h6" color="inherit" noWrap>
              <CustomLink to="/">MYUNI</CustomLink> 
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mt: 15, mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" sx={{ my: { xs: 1, md: 3 }, p: { xs: 1, md: 2 } }}>
            컨설팅 신청
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep, consultingRequestForm, consulitngRequestHandler)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  이전
                </Button>
              )}

              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? '신청' : '다음'}
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}