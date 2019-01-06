import React, { Component } from 'react';

class Angela extends Component {
    render() {
        const clothes = this.props.clothes;
        return (
            <div>
                Angela
                { clothes }
            </div>
        )
    }
}

export default Angela;