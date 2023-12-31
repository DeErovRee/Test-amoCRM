import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css'
import './fonts/Inter/Inter-VariableFont_slnt,wght.ttf'
import './fonts/Montserrat/Montserrat-VariableFont_wght.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
