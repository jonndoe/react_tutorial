import React from 'react';

import ReactDOM from 'react-dom';



class CarDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
        return (
            <div>
                <h1> In general this car has the following data:</h1>
                <p>Brand: {this.state.brand}</p>
                <p>Model: {this.state.model}</p>
                <p>Color: {this.state.color}</p>
                <p>Year: {this.state.year}</p>
                <p>And of course this is passed from props:
                    {this.props.moreinfo}
                </p>

                <button
                    type="button"
                    onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
        )
    }

}



export default CarDetail;