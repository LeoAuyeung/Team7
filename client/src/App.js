import React, { Component } from 'react';
import logo from './logo.svg';
import LeoComponent from './LeoComponent';
import Angela from './Angela';
import './App.css';

/*
  clothes: ["black shirt", "black bomber", "black jeans", "BT21 Hoodie"]
  [ <Angela clothes="Black shirt"/>, <Agn ... ..]
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names : ["Leo", "Angela", "Tracey"],
      clothes: ["black shirt", "black bomber", "black jeans", "BT21 Hoodie"],
      isCool: false
    }
  }
  componentDidMount = () => {
    alert("hello");
  }

  addLastName = (name) => {
    return name + " Lin"
  }

  render() {
    const Namez = this.state.names.map(name =>
      <h2> { this.addLastName(name) } </h2>
    );
    const multipleAngelas = this.state.clothes.map(article => 
      <Angela clothes={ article }/>
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          { this.state.isCool ? multipleAngelas : Namez }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
