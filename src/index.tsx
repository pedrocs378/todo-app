import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeAppProvider } from './contexts/ThemeAppContext';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);