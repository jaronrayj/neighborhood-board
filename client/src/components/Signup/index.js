/* eslint-disable no-undef */
import { Button, Form, Message, Loader, Container } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header'
import Col from 'react-bootstrap/Col';



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            error: false,
            errorMessage: "",
            submitting: false,
            formErrors: true
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
                <Message.Header>Error Creating Account</Message.Header>
                <p>{this.state.errorMessage}</p>
            </Message>
        )
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value }, function () {
            this.validate()
        });
    }

    validate = () => {
        if (
            this.state.firstName !== '' &&
            this.state.lastName !== '' &&
            this.state.email !== '' &&
            this.state.username !== '' &&
            this.state.password !== '' &&
            this.state.confirmPassword !== ''
        ) {
            if (this.state.password === this.state.confirmPassword) {
                this.setState({ formErrors: false, error: false, errorMessage: "" })
            } else {
                this.setState({ error: true, errorMessage: "Passwords Do No Match" })
            }

        }
    }

    handleSubmit = (e) => {

        e.preventDefault()

        this.setState({ submitting: true })

        axios.post('/api/auth/signup', this.state)
            .then((result) => {

                if (result.data.success) {
                    this.props.history.push('/login')
                } else {
                    this.setState({ error: true, errorMessage: result.data.message, submitting: false })
                }

            })
            .catch((error) => {
                console.log(error)
            });

    }




    render() {

        return (
            <>

                <Container className='signup-page-container' style={{ marginTop: "80px" }}>
                    <Col>

                        <div className='signup-form-container'>

                            <h1 style={{ color: "#404A59", fontSize: "2rem", textAlign: "center" }}>New Account Creation</h1>

                            {this.state.error ? this.errorMessage() : null}
                            <br />

                            <Header style={{ float: "left" }} />



                            <Form style={{ marginLeft: "auto", marginRight: "auto", content: "center", float: "right" }}>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>First Name</label>
                                    <input autofocus="true" onChange={this.handleInputChange} placeholder='John' name='firstName' style={{ width: "559px" }} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>Last Name</label>
                                    <input onChange={this.handleInputChange} placeholder='Doe' name='lastName' style={{ width: "559px" }} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>Email</label>
                                    <input onChange={this.handleInputChange} placeholder='email@noreply.com' name='email' style={{ width: "559px" }} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>Username</label>
                                    <input onChange={this.handleInputChange} placeholder='my_username' name='username' style={{ width: "559px" }} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>Password</label>
                                    <input onChange={this.handleInputChange} placeholder='*********' type='password' name='password' style={{ width: "559px" }} />
                                </Form.Field>

                                <Form.Field>
                                    <label style={{ color: "#404A59" }}>Confirm Password</label>
                                    <input onChange={this.handleInputChange} placeholder='*********' type='password' name='confirmPassword' style={{ width: "559px" }} />
                                </Form.Field>

                                {this.state.submitting ?
                                    <Button disabled={true} onClick={this.handleSubmit} type='submit' style={{ backgroundColor: "#404A59", color: "white", width: "550px", marginTop: "20px" }}><Loader size='big' inverted active />Creating Account</Button>
                                    :
                                    <Button onClick={this.handleSubmit} disabled={this.state.formErrors} type='submit' style={{ backgroundColor: "#800000", color: "white", width: "550px", marginTop: "20px" }}>Create Account</Button>
                                }

                                <br />
                                <p className='text-center' style={{
                                    backgroundColor: "#404A59",
                                    color: "white", marginTop: "30px",
                                    width: '550px'
                                }}>Already have an account? <Link to='/login' style={{ color: "#e7f87d", paddingLeft: "9px" }}> Login Here</Link></p>
                            </Form>
                        </div>
                    </Col>

                </Container>



            </>
        )
    }
}

export default LoginForm;