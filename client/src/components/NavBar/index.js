import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            route: ""
        }
    }

    render() {
        return (
            <>
                <Link to='/signup'>
                    <Button>Sign Up</Button>
                </Link>

                <Link to='/login'>
                    <Button>Login</Button>
                </Link>
            </>
        )
    }
}

export default NavBar;