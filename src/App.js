import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import ConsultingRequest from './pages/ConsultingRequest';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Dashboard from './pages/DashBoard';
import MyUni from './pages/MyUni';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Container component="main" maxWidth="md" sx={{ mt: 15, mb: 4 }}>
          {/* <ConsultingRequest/> */}
          <MyUni/>
          {/* <Dashboard/> */}
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
