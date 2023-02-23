import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from './utils/GlobalStyles';
import { theme } from './utils/theme';

import { Navigation } from './components/Navigation';

import { Home } from './views/home';
import { Examples } from './views/examples';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='examples' element={<Examples />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
