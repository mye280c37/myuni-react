import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';

import CustomLink from './components/common/CustomLink';
import ConsultingRequest from './pages/ConsultingRequest';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Dashboard from './pages/DashBoard';
import MyUni from './pages/MyUni';
import ConsultingIntroduction from './pages/ConsultingIntroduction';
import GradeConversion from './pages/GradeConversion';
import YouTubeMaterials from './pages/YoutubeMaterials';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Routes>
          <Route path="/" element={<MyUni/>}></Route>
          <Route path="/grade-conversion" element={<GradeConversion/>}></Route>
          <Route path="/consulting-introduction" element={<ConsultingIntroduction/>}></Route>
          <Route path="/consulting-request" element={<ConsultingRequest/>}></Route>
          <Route path="/lectures" element={<YouTubeMaterials/>}></Route>
          <Route path="/admin" element={<Dashboard/>}></Route>
        </Routes>
        <Button variant="contained"
          size="large" 
          color="success" 
          sx={{
            position: 'fixed', 
            bottom: 30,  
            right: 30,
            width: {md: '175px'},
            height: {md: '55px'},
            fontSize: {md: '1.5rem'}
            }}
          >
          <CustomLink to={"/consulting-request"}>컨설팅 신청</CustomLink>
        </Button>
        <Footer />
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
