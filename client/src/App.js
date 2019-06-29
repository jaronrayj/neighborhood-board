import React, { Component } from "react";
import EventContainer from './components/EventContainer'
import "./App.css";
import Discussion from "./components/Discussion";

class App extends Component {
  render() {
    return (
      <>

        <EventContainer />
        <Discussion />
      </>
    );
  }
}

export default App;
