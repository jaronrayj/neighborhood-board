import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EventContainer from './components/EventContainer'
import "./App.css";
import Discussion from "./components/Discussion";
import Marketplace from "./components/Marketplace";
import LoginForm from "./components/Login";
import Signup from './components/Signup'
import { Route, withRouter, Switch } from "react-router-dom";

class App extends Component {


  render() {
    return (
      <>
        <Route render={({ location }) => (
          <Switch location={this.props.location}>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        )} />
        <Row>
          <Col sm={3}>
            <EventContainer />
          </Col>
          <Col sm={6}>
            <Discussion />
          </Col>
          <Col sm={3}>
            <Marketplace />
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(App);
