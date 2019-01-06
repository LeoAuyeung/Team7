import React, { Component } from 'react'

class LeoComponent extends Component {
  componentDidMount() {
  }

  componentWillMount = () => {

  }
  
  render() {
    const leo = <h1> Leo</h1>

    return (
      <div>
        { this.props.name }
      </div>
    )
  }
}

export default LeoComponent;