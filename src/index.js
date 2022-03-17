import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Parent from './ParentChild/Parent';
import Register from './Register'
import './App.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>

    {/* <Parent/> */}
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
