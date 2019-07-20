import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EventContainer from '../EventContainer';
import Discussion from "../Discussion";
import Marketplace from "../Marketplace";
import axios from 'axios';
import './style.css'
export default class Board extends Component {

    componentDidMount = () => {

        const currentComponent = this
        const _id = this.props.match.params.id

        currentComponent.setState({ _id: _id })

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.get('/api/users/authenticate').then(function (response) {

            currentComponent.setState({ authenticatedUser: response.data.authenticatedUser })

        }).catch(function (error) {
            console.log(error)
            window.location = '/login'
        })
    }

    render() {

        return (
            <div>
                <Row style={{ marginTop: "80px" }}>
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



                {/* <StickyFooter
                    bottomThreshold={50}
                    normalStyles={{
                        backgroundColor: "#999999",
                        padding: "2rem"
                    }}
                    stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem"
                    }}
                >

                </StickyFooter> */}

            </div>
        )
    }
}

