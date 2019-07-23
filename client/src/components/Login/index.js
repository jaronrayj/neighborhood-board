/* eslint-disable no-undef */
import { Button, Form, Message, Loader, Container } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './style.css'
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Header from "../Header"







class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            submitting: false,
            message: ""
        }
    }

    componentDidMount = () => {

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.get('/api/users/authenticate').then(function (response) {
            window.location = '/board'
        }).catch(function (err) {
            console.log(err)
        })
    }

    errorMessage = () => {
        return (
            <Message negative>
                <Message.Header>Error Logging In</Message.Header>
                <p>{this.state.message}</p>
            </Message>
        )
    }



    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {

        this.setState({ submitting: true })

        e.preventDefault()

        axios.post('api/auth/login', this.state)

            .then((result) => {

                localStorage.setItem('jwtToken', result.data.token);
                window.location = '/board'

            })

            .catch((error) => {

                console.log(error)

                this.setState({ error: true, errMessage: 'Login failed. Username or password not match', submitting: false })

                if (error.response.status === 401) {
                    console.log(error)
                    this.setState({ message: 'Login failed. Username or password not match' });
                } else if (error.response.status === 400) {
                    this.setState({ message: "Authentication failed. Invalid Username." })
                }

            });

    }


    render() {

        return (
            <Container className='login-page-container' style={{ marginTop: "80px" }}>
                <Col>
                    <div className='form-container'>



                        {this.state.error ? this.errorMessage() : null}


                        <Form>
                            <Form.Field style={{ float: 'right' }}>
                                <label style={{ color: "#404A59" }}>Username</label>
                                <input style={{ width: "550px" }} onChange={this.handleInputChange} placeholder='' name='username' />
                            </Form.Field>
                            <Form.Field style={{ float: 'right' }}>
                                <label style={{ color: "#404A59" }}>Password</label>
                                <input style={{ width: "550px" }} onChange={this.handleInputChange} placeholder='*********' type='password' name='password' />
                            </Form.Field>

                            {this.state.submitting ?
                                <Button type='submit' disabled={true} onClick={this.handleSubmit} style={{ float: 'right', backgroundColor: "#800000", color: "white", width: "550px", marginTop: "20px" }}><Loader size='big' active inverted />Logging In</Button>
                                :
                                <Button type='submit' onClick={this.handleSubmit} style={{ float: 'right', backgroundColor: "#800000", color: "white", width: "550px", marginTop: "20px" }}>Login</Button>
                            }

                            <br />
                            <p className='text-center' style={{
                                float: 'right',
                                backgroundColor: "#404A59",
                                color: "white", marginTop: "30px",
                                width: '550px'
                            }}>New users: <Link to='/signup' style={{ color: "#e7f87d", paddingLeft: "9px" }}>Click Here</Link></p>

                        </Form>
                        <Header style={{ float: "left" }} />

                    </div>
                </Col>

            </Container>

        )
    }
}

export default LoginForm;