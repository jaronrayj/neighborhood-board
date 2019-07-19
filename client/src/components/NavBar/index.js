import React, { Component } from 'react'
import { Menu, Label, Button, Icon, Image } from 'semantic-ui-react'
import axios from 'axios'
import "./style.css"
import profile from "../images/ProfileRog.jpg"

export default class NavBar extends Component {

  state = {
    update: false,
    authenticated: false
  }

  componentDidMount = () => {

    const currentComponent = this

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

    axios.get('/api/users/authenticate').then(function (response) {
      currentComponent.setState({ authUser: response.data.authenticatedUser, update: true, authenticated: true }, function (response) {
      })
    }).catch(function (err) {
      console.log(err)

    })
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <Menu className="navbarheader" stackable style={{ position: "fixed", top: "0", left: "0", width: "100%", zIndex: "100" }}>
        <Menu.Item href='/board'>
          <Image size="mini" alt='label' src="https://emojis.wiki/emoji-pics/facebook/house-facebook.png" />
              <h2 >Neighborhood Board</h2>
        </Menu.Item>

        {this.state.authenticated ? null :
          <Menu.Item position='right'>
            <Button icon labelPosition='left' href='/login' style={{ backgroundColor: "#800000", color: "white" }}>
              <Icon name='arrow right' />
              Login
                </Button>
          </Menu.Item>
        }

        {this.state.authenticated ?
          <Menu.Item position='right'>
            <Label as='a' style={{ backgroundColor: "lightgrey", color: "#800000" }} image href='/profile'>
              <img alt='label user' src={profile} />
              {this.state.authUser.displayName}
              {/* <Label.Detail>{this.state.authUser.role}</Label.Detail> */}
            </Label>
          </Menu.Item>

          : null}

        {this.state.authenticated ?
          <Menu.Item name='Logout' >
            <Button icon labelPosition='left' onClick={this.logout} style={{ backgroundColor: "#800000", color: "white" }}>
              <Icon name='arrow left' />
              Logout
                </Button>
          </Menu.Item>

          : null}

      </Menu>
    )
  }
}