import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/Login";
import Signup from './components/Signup'
import Board from './components/Board'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// const routes = [
//   {
//     path: '/',
//     key: 'home',
//     component: 'NavBar'
//   },
//   {
//     path: '/login',
//     key: 'login',
//     component: 'LoginForm'
//   },
//   {
//     path: '/signup',
//     key: 'signup',
//     component: 'Signup'
//   },
//   {
//     path: '/board',
//     key: 'board',
//     component: 'Board'
//   }
// ]

class App extends Component {

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
