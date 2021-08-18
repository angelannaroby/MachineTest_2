import React, { Component } from "react";
import Banner from "./Banner";
import LatestData from "./LatestData";
import GraphicalData from "./GraphicalData";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Banner />
        <LatestData />
        <GraphicalData />
        <footer class="footer">
          <div class="footerContainer">
            <p class="copyright">© Angel Anna Roby # Simelabs Machine Test</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
