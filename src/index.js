import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { darkModeContextProvider } from './context/darkModeContext';

ReactDOM.render(
  <React.StrictMode>
    <darkModeContextProvider>
     <App />
     </darkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);