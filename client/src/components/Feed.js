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
        axios.get('https://api.iextrading.com/1.0/stock/GOOG/chart/1m')
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                Feeeeeed
            </div>
        );
    }
}


export default Feed;