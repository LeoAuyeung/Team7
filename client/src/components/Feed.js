import React, { Component } from 'react';
const axios = require('axios');

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1> {this.props.city} </h1>
                <p> Borough Park (also spelled Boro Park) is a neighborhood in the southwestern part of the borough of Brooklyn, in New York City, United States. The neighborhood is bordered by Bensonhurst to the south, Bay Ridge to the southwest, Sunset Park to the west, Kensington and Green-Wood Cemetery to the northeast, Flatbush to the east, and Midwood to the southeast.</p>
            </div>
        );
    }
}


export default Feed;