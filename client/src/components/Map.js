import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const Point = ({text}) => <h1> {text} </h1>

function Point2() {
    return (
        <div>
            <h2> Leo </h2>
            <input type="text" name="" id=""/>
        </div>
    )
}

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 40.768242,
            lng: -73.964346
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact 
                    class="map"
                    bootstrapURLKeys={{ key: "AIzaSyA55cnra57OngxG_Y23HqMDl-AFUJEexsw" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <Point
                    lat={40.768242}
                    lng={-73.964346}
                    text={'Hunter College'}
                />
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map