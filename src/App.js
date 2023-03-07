import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import * as vie from './views';
import * as com from './components';
import * as uti from './utils';

function App() {
  return (
    <ThemeProvider theme={uti.theme}>
      <uti.GlobalStyles />
      <Router>
        <com.Navigation />
        <Routes>
          <Route path='/' element={<vie.Home />}/>
          <Route path='css-content' element={<vie.CssContent />}/>
          <Route path='js-content' element={<vie.JsContent />} />
          <Route path='examples' element={<vie.Examples />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
