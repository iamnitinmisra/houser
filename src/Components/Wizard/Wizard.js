import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0 //this may cause an issue as it is setup to be an int not a string
    };
  }

  nextPath(path){
      this.props.history.push(path)
  }

  postHouse = (name, address, city, state, zip) => {
    axios.post("/api/house", { name, address, city, state, zip }).then(res => {
      console.log(res.data);
      this.setState({
        name: res.data.name,
        address: res.data.address,
        city: res.data.city,
        city: res.data.city,
        state: res.data.state,
        zip: res.data.zip
      });
    });
  };


  render() {
    // console.log(this.state);
    const { name, address, city, state, zip } = this.state;
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
              this.setState({ address: event.target.value });
            }}
          />
          City:{" "}
          <input
            onChange={event => {
              this.setState({ city: event.target.value });
            }}
          />
          State:{" "}
          <input
            onChange={event => {
              this.setState({ state: event.target.value });
            }}
          />
          Zip:{" "}
          <input
            onChange={event => {
              this.setState({ zip: event.target.value });
            }}
          />
        </form>
        <nav>
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button
            onClick={() => this.postHouse(name, address, city, state, zip)
            }
            
          >
            Complete
          </button>
        </nav>
      </div>
    );
  }
}
