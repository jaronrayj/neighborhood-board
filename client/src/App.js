import React, { Component } from "react";
import EventContainer from './components/EventContainer'
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <EventContainer />
        <Post />
      </>
    );
  }
}

export default App;
