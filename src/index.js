import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'script-loader!./vendor/jquery-1.10.2.min';
import 'script-loader!./vendor/init';
import 'script-loader!./vendor/jquery.fittext';
import 'script-loader!./vendor/jquery.flexslider';
import 'script-loader!./vendor/jquery-migrate-1.2.1.min';
import 'script-loader!./vendor/magnific-popup';
import 'script-loader!./vendor/modernizr';
import 'script-loader!./vendor/waypoints';
import './css/default.css';
import './css/fonts.css';
import './css/layout.css';
import './css/magnific-popup.css';
import './css/media-queries.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
