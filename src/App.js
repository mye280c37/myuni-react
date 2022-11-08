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

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MyUni/>}></Route>
          <Route path="/grade-conversion" element={<GradeConversion/>}></Route>
          <Route path="/consulting-introduction" element={<ConsultingIntroduction/>}></Route>
          <Route path="/consulting-request" element={<ConsultingRequest/>}></Route>
          <Route path="/lectures" element={<YouTubeMaterials/>}></Route>
          <Route path="/admin" element={<Dashboard/>}></Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
