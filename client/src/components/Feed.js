import React, { Component } from 'react';
const axios = require('axios');

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "Bensonhurst"
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                Feedeededd
            </div>
        );
    }
}


export default Feed;