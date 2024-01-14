import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ComboMemo from './components/ComboMemo'
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
        <CssBaseline />
        <ComboMemo />
      </ProfileProvider>
    </ThemeProvider>
  );
}


export default App
