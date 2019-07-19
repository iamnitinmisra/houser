import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "" //this may cause an issue as it is setup to be in int not a string
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Wizard Component
        <form>
          Name:
          <input
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
          />
          Address: 
          <input 
            onChange={event => {
                this.setState({ address: event.target.value })
            }}
            />
          City: <input 
            onChange={event => {
                this.setState({ city: event.target.value })
            }}
            />
          State: <input 
            onChange={event => {
                this.setState({ state: event.target.value })
            }}
            />
          Zip: <input 
            onChange={event => {
                this.setState({ zip: event.target.value })
            }}
            />
        </form>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
