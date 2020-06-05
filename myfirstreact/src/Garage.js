import React from 'react';

import ReactDOM from 'react-dom';
import Car from './Car.js';

class Garage extends React.Component {
  render() {
    const carpower = "232hp";
    const carinfo = {label: 'Ford', model: 'Mustang'};
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" power={carpower} extrainfo={carinfo} />
      </div>
    );
  }
}

export default Garage;
