import React, { Component } from 'react'

export default class Random extends Component {
    constructor()
    {
        super()
        this.state={car:"Swift"}
    }
    handleChange=()=>{
        this.setState({car:"Thar"})
    }
  render() {
    return (
      <div>
       Inside  Random  Components
       <h4>Car Name:{this.state.car}</h4>
       <button onClick={this.handleChange} className='btn btn-warning'>Change Car</button>
      </div>
    )
  }
}
