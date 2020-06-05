import React from 'react';

import ReactDOM from 'react-dom';

class Car extends React.Component {
    render () {
        return <h1>Hello this is car {this.props.brand}!</h1>;
    }
}

export default Car;