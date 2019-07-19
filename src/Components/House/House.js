import React, { Component } from "react";

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //   console.log(this.props)
    const { house } = this.props;
    return (
      <div>
        <h4>Property Name: {house.name}</h4>
        <h4>Address: {house.address}</h4>
        <h4>City: {house.city}</h4>
        <h4>State: {house.state}</h4>
        <h4>Zip: {house.zip}</h4>
        <button>Delete</button>
      </div>
    );
  }
}
