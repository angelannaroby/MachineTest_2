import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import AppRoutes from "./routes/AppRoutes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
          <AppRoutes />
      </Provider>
    );
  }
}

export default App;
