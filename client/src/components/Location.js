import React, { Component } from 'react';
import Feed from './Feed'
import { GeoJSON, TileLayer, Tooltip, Popup } from "react-leaflet";

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "borough": "#000"
        };
    }

    componentDidMount() {
        this.setState({"borough": this.props.data.features[0].properties.boro_name});
    }

    getStyle = (feature, layer) => {
        let color = {
            "Brooklyn": "#006400",
            "Queens": "#fad849",
            "Staten Island": "#f3adac",
            "Manhattan": "#74cddd",
            "Bronx": "#d4a1f9"
        }
        return {
            color: color[this.state.borough],
            weight: 5,
            opacity: 0.65
        };
    };
    render() {
        return (
            <GeoJSON data={this.props.data} style={this.getStyle}>
            {/*<Tooltip>A tooltip</Tooltip>*/}
                <Popup onOpen={() => {}}>
                    <Feed city={this.props.data.features[0].properties.ntaname}/>
                </Popup>
            </GeoJSON> 
        );
    }
}

export default Location;