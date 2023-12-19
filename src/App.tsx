import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ComboMemo from './components/ComboMemo'

const darkTheme = createTheme ({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <ComboMemo />
      </div>
    </ThemeProvider>
  );
}


export default App
