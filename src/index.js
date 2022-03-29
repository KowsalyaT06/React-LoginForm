import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import Parent from './ParentChild/Parent';
import App from './App'
// import './App.css';

import reportWebVitals from './reportWebVitals';
// import Portals from './Component/Portals/Portals'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Portals/> */}
    {/* <Parent/> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
