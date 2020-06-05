import React from 'react';
import ReactDOM from 'react-dom';
import Car  from "./Car";
import Garage from "./Garage";
import CarDetail from "./CarDetail";


const myfirstelement = (
    <div>
      <h1>Hello React!</h1>
      <Garage />

      <CarDetail moreinfo='This is from props!!!'/>
    </div>
                       )

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);


