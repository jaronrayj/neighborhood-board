import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/Login";
import Signup from './components/Signup'
import Board from './components/Board'
import NavBar from './components/NavBar'
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
            <Route exact path='/' exact component={NavBar} />
            <Route exact path="/login" exact component={LoginForm} />
            <Route exact path="/signup" exact component={Signup} />
            <Route exact path="/board" exact component={Board} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
