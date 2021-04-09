import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <header>
        <h1>Iot valter</h1>
        <h3>Digitaliziraj svoj hladilnik</h3>
      </header>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
