import React from 'react';
import ReactDOM from 'react-dom';
import DrumPad from './components/DrumPad';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.render(
  <React.StrictMode>
    <DrumPad/>
  </React.StrictMode>,
  document.getElementById('root')
);
