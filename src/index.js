import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MarketView from './components/MarketView/index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemName from './components/MarketItems/index'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<MarketView/>} />
      <Route path ="/item/:itemName" element={<ItemName/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
