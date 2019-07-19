import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount(){
      axios.get('/api/allhouses').then(res => {
          console.log(res.data)
          this.setState({
              houses: res.data
          })
      })
  }

  render() {
    //   console.log(this.state)
    return (
      <div>
        Dashboard Component
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {this.state.houses.map(house => {
          return (
            <div>
              <House house={house} />
              
            </div>
          );
        })}
      </div>
    );
  }
}
