import React, { Component } from 'react';
import { Map, GeoJSON, TileLayer, Tooltip, Popup } from "react-leaflet";
import "./LeafletMap.css"
import "leaflet/dist/leaflet.css";
import Feed from './Feed';
import geojson from '../static/g.json';
import Location from './Location'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "100%"
};

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [40.768, -73.964346]
    }
  }
  
  componentDidMount() {
    console.log(geojson);
  }

  getStyle = (feature, layer) => {
    console.log(feature, layer);
    let arr = ["#006400", "#19FF67", "#66CC88"];
    return {
      color: arr[Math.floor(Math.random() * arr.length)],
      weight: 5,
      opacity: 0.65
    };
  };
  
  render() {
    const cities = geojson.features.map(feature => {
      const data = {
        "type": "FeatureCollection",
        "features": [feature]
      };
      return (
        <Location data={data}/>
      )
    })

    return (
      <div>
        <Map center={this.state.position} zoom={12} zoomSnap={0.25}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {cities}
        </Map>
      </div>
    );
  }
}

export default LeafletMap;