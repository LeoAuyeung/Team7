import React, { Component } from 'react';
import logo from './logo.svg';
import Burger from './components/Burger';
import LocationSearch from './components/LocationSearch';
import LeafletMap from './components/LeafletMap';
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
        <LocationSearch root="location-search"/>
        <LeafletMap/>
      </div>
    );
  }
}

export default App;
