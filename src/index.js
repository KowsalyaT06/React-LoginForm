import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import Parent from './ParentChild/Parent';
import App from './App'
// import './App.css';

import reportWebVitals from './reportWebVitals';
// import Portals from './Component/Portals/Portals'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import Store from './Component/Redux-Ui/Redux/Store/Store'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
  <App />
  </Provider>
   
    
    {/* <Portals/> */}
    {/* <Parent/> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
