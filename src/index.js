import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import './css/home.css'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from "./reportWebVitals";
import MainComponent from './components/mainComponent';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainComponent/>
  </React.StrictMode>
);

reportWebVitals();