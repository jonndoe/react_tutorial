import React from 'react';

import ReactDOM from 'react-dom';

class Car extends React.Component {
    render () {
        return (
            <div>
              <h1>This is car {this.props.brand}!</h1>
              <h3>And my power is {this.props.power}</h3>
              <h3>And my label is {this.props.extrainfo.label}</h3>
              <h3>And my model is {this.props.extrainfo.model}</h3>
            </div>
        );
    }
}

export default Car;
