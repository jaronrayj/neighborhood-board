import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EventContainer from './components/EventContainer'
import "./App.css";
import Discussion from "./components/Discussion";
import Marketplace from "./components/Marketplace";
import LoginForm from "./components/Login";
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {

  state = {
    isAuthenticated: false,
    userInfo: ""
  }

  handleAuth = (bool, emailUser) => {
    this.setState({
      isAuthenticated: bool,
      userInfo: emailUser
    })
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      isAuthenticated: false,
      userInfo: ""
    })
  }

  render() {
    return (
      <>
        <Router>

          <Switch location={this.props.location}>
            <Route exact path="/login" exact component={LoginForm} />
            <Route exact path="/signup" exact component={Signup} />
          </Switch>
        </Router>


        <Row>
          <Col sm={3}>
            <EventContainer
              isAuthed={this.state.isAuthenticated}
              handleAuth={this.handleAuth}
            />
          </Col>
          <Col sm={6}>
            <Discussion
              isAuthed={this.state.isAuthenticated}
              handleAuth={this.handleAuth}
            />
          </Col>
          <Col sm={3}>
            <Marketplace
              isAuthed={this.state.isAuthenticated}
              handleAuth={this.handleAuth}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
