import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './utils/GlobalStyles';
import { Navigation } from './components/Navigation';

import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
