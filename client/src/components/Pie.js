import React, { Component } from 'react';
import { Pie } from '@nivo/pie';

class DataPie extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h3>Demographics:</h3>
            <Pie
                width={200}
                height={250}
                margin={{
                    top: 0,
                    bottom: 0,
                }}
                data={this.props.demographics}
                animate
                innerRadius={0.6}
                padAngle={0.5}
                cornerRadius={5}
                radialLabelsLinkColor="inherit"
                radialLabelsLinkStrokeWidth={3}
                radialLabelsTextColor="inherit:darker(1.2)"
            />
            </div>
        );
    }
}

export default DataPie;