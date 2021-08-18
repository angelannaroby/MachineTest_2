import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron className="banner">
        <div className="bannerText">
          <h6>LOCATION</h6>
          <h1>Rosemont, US</h1>
        </div>
      </Jumbotron>
    );
  }
}
