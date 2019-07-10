import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EventContainer from './components/EventContainer'
import "./App.css";
import Discussion from "./components/Discussion";
import Marketplace from "./components/Marketplace";

class App extends Component {


  render() {
    return (
      <>
        <Row>
          <Col sm={3}>
            <EventContainer />
          </Col>
          <Col sm={6}>
            <Discussion  />
          </Col>
          <Col sm={3}>
            <Marketplace />
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
