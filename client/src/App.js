import React, { Component } from 'react';
import logo from './logo.svg';
import GMap from './components/GMap'
import Burger from './components/Burger';
// import Feed from './components/Feed'
import LocationSearch from './components/LocationSearch';
import PidgeonMap from './components/PidgeonMap';
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
        {/* <Feed> */}
        <Burger/>
        <LocationSearch/>
        {/* <GMap/> */}
        <PidgeonMap/>
      </div>
    );
  }
}

export default App;
