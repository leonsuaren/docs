import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as com from './components';
import * as uti from './utils';
import * as vie from './views';

function App() {
  return (
    <ThemeProvider theme={uti.theme}>
      <uti.GlobalStyles />
      <Router>
        <com.Navigation />
        <Routes>
          <Route path='/' element={<vie.Home />}/>
          <Route path='examples' element={<vie.Examples />}/>
        </Routes>
        <com.Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
