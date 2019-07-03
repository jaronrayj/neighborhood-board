import React, { Component } from "react";
import EventContainer from './components/EventContainer'
import "./App.css";
import Discussion from "./components/Discussion";
import Marketplace from "./components/Marketplace";

class App extends Component {


  render() {
    return (
      <>
        <EventContainer />
        <Discussion  />
        <Marketplace />
      </>
    );
  }
}

export default App;
