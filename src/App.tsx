import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ComboMemo from './components/ComboMemo'
import WaterMark from './components/WaterMark';

import { ProfileProvider } from './ProfileContext'

const darkTheme = createTheme ({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ProfileProvider>
        <WaterMark />
        <CssBaseline />
        <ComboMemo />
      </ProfileProvider>
    </ThemeProvider>
  );
}


export default App
