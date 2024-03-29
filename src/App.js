import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ConsultingRequest from './pages/ConsultingRequest';
import Dashboard from './pages/DashBoard';
import MyUni from './pages/MyUni';
import ConsultingIntroduction from './pages/ConsultingIntroduction';
import GradeConversion from './pages/GradeConversion';
import YouTubeMaterials from './pages/YoutubeMaterials';
import ReviewsPageLayout from './pages/ReviewsPageLayout';
import Main from './pages/Main';
import CareerPlanningConsulting from './pages/CareerPlanningConsulting';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/myuni" element={<MyUni/>}></Route>
          <Route path="/grade-conversion" element={<GradeConversion/>}></Route>
          <Route path="/consulting-introduction" element={<ConsultingIntroduction/>}></Route>
          <Route path="/career-planning-consulting" element={<CareerPlanningConsulting/>}></Route>
          <Route path="/consulting-request" element={<ConsultingRequest/>}></Route>
          <Route path="/lectures" element={<YouTubeMaterials/>}></Route>
          <Route path="/reviews" element={<ReviewsPageLayout/>}></Route>
          <Route path="/admin" element={<Dashboard/>}></Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
