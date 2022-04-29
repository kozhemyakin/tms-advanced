import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Cats from './Cats';
import ItalicText from './ItalicText'

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <Checkbox /> */}
    <Cats />
    <ItalicText />
    
  </React.StrictMode>,
  document.getElementById('root')
);
