import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map'
import Burger from './components/Burger';
// import Feed from './components/Feed'
// import LocationSearch from './components/LocationSearch';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Burger/>
        <input type="text" className="location-search"/>
        {/* <LocationSearch/> */}
        <Map/>
      </div>
    );
  }
}

export default App;
