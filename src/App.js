import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ConsultingRequest from './pages/ConsultingRequest';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Dashboard from './pages/DashBoard';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <ConsultingRequest/>
        {/* <Dashboard/> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
