import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Consulting from './containers/Consulting';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Consulting />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
