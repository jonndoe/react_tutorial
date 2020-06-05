import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

const myfirstelement = (
    <div>
      <h1>Hello React!</h1>
      <Car />
    </div>
                       )

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);


