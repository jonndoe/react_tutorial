# react_tutorial

## Create conda_environment(with node.js and python):
 `$ conda create -yn env38_nodejs nodejs python=3.8`
 
 `$ conda activate env38_nodejs`
 
 `(env38_nodejs)$ node --version`
 
 `(env38_nodejs)$ npm --version`
 
 `(env38_nodejs)$ conda deactivate`
 
 `$`
 
## If need to remove conda_environment:
 `$ conda env remove -yn env38_nodejs`
 


## install create-react-app:
 `(env38_nodejs)$ npm install -g create-react-app`
 
 The create-react-app will set up everything you need to run a React application.
 
 `(env38_nodejs)$ npx create-react-app myfirstreact`
 
 `(env38_nodejs)$ cd myfirstreact`
 
 `(env38_nodejs)\myfirstreact$ npm start`
 
 open your browser and type localhost:3000
 
 
 ### React creates a VIRTUAL DOM in memory.
 ### React only changes what needs to be changed!
 ### To use React in production, you need NPM and Node.js
 ### You can write React code directly in HTML(only for test/dev, not for production!)
 see example.html
 
 ### ES6 additions:
 - Classes
 - Arrow Functions
 - Variables(let, const, var)
 
 #### Classes:
 Simple:
  ```
  class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  ```
with own method:
```
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

mycar = new Car("Ford");
mycar.present();
```

Inheritance:
```
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
mycar = new Model("Ford", "Mustang");
mycar.show();
```

#### Arrow functions:
No arrow functions:
```
hello = function() {
  return "Hello World!";
}
```
With arrow functions:
```
hello = () => {
  return "Hello World!";
}

hello = () => "Hello World!";
hello = (val) => "Hello " + val;
hello = val => "Hello " + val;
```

The handling of this is also different in arrow functions compared to regular functions.

With a regular function, this represents the object that called the function:
```
class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```
With an arrow function, this represents the Header object no matter who called the function:

```
class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

In short:
 - Regular function represents the object which CALLED function.
 - Arrow function represents the object which CONSTRUCTED function.
 
 #### Variables:
  - var
  - let
  - const
  
var x = 5.6;

var has a function scope, not a block scope.

If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block

let x = 5.6;

let has a block scope.

let is the block scoped version of var, and is limited to the block (or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

const x = 5.6;

const has a block scope.

const is a variable that once it has been created, its value can never change.


## ReactDOM.render()

The purpose of the function is to display the specified HTML code inside the specified HTML element.

## The HTML Code

The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:

```

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root'));

```


## The Root Node

The root node is the HTML element where you want to display the result.

It does NOT have to be a <div> element and it does NOT have to have the id='root':

```

The root node can be called whatever you like:

<body>

  <header id="sandy"></header>

</body>

Display the result in the <header id="sandy"> element:

ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

```

## React JSX
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

JSX converts HTML tags into react elements.

#### JSX:
```

const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));

```

#### Without JSX:

```
const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));
```

#### Expressions in JSX:

```

Execute the expression 5 + 5:

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;


```

#### One Top Level Element:

The HTML code must be wrapped in ONE top level element.

So if you like to write two headers, you must put them inside a parent element, like a div element

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

```
Wrap two headers inside one DIV element:

const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

```

#### Elements Must be Closed:

JSX follows XML rules, and therefore HTML elements must be properly closed.

JSX will throw an error if the HTML is not properly closed.

```
Close empty elements with />

const myelement = <input type="text" />;
```


## React Components:

Components are like functions that return HTML elements.

Components come in two types, Class components and Function components

- component name must start with an upper case letter.
- component has to include `extends React.Component` statement
- component requires `render()` method to return HTML.

Example of class component:

```
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

`ReactDOM.render(<Car />, document.getElementById('root'));`

Example of function component:

```
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
```

#### Component Constructor:

In React, component properties should be kept in an object called state.

```

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

```

Use the color property in the render() function:

```

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

```

#### Props:

Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

```
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));
```

#### Components in Components:

We can reffer to components inside other components.

```

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

```

#### Components in Files:

- We can keep components in separate files
- It should be .js file
- It should have `export default Car;` in the end.



This is the new file, we named it "App.js":
```
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  
 
}
}

export default Car;

```



Now we import the "App.js" file in the application, and we can use the Car component as if it was created here.
```
import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

ReactDOM.render(<Car />, document.getElementById('root'));
```

## React Props

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

Add a "brand" attribute to the Car element:

`const myelement = <Car brand="Ford" />;`

The component receives the argument as a props object:

Use the brand attribute in the component:

```

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

```

#### Pass Data:

Props are also how you pass data from one component to another, as parameters.

Send the "brand" property from the Garage component to the Car component:

```

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

If you have a variable to send, and not a string as in the example above:
```

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carname = "Ford";
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carname} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```
Or send it as an object:

Create an object named "carinfo" and send it to the Car component:

```

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

```

#### Props in the Constructor:

If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method...

React Props are read-only! You will get an error if you try to change their value.

```

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));
```


## React State

React components has a built-in state object.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

Specify the state object in the constructor method:

```

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

The state object can contain as many properties as you like:

```

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

```

#### Using the `state` Object

Refer to the `state` object anywhere in the component by using the `this.state.propertyname` syntax:

```

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
```


#### Changing the state Object

To change a value in the state object, use the this.setState() method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).

Add a button with an onClick event that will change the color property:

```

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

## React LifeCycle

 Monitor and manipulate Component lifecycle by:
 
- Mounting
- Updating
- Unmounting

#### Mounting

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

    constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()
    
    
The render() method is required and will always be called, the others are optional and will be called if you define them.

The constructor method is called, by React, every time you make a component:

```

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

```

`getDerivedStateFromProps`

The getDerivedStateFromProps method is called right before the render method:

```

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```


componentDidMount

The componentDidMount() method is called after the component is rendered.

```

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

```



