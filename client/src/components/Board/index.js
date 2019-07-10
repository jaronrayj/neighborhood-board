import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EventContainer from '../EventContainer';
import Discussion from "../Discussion";
import Marketplace from "../Marketplace";

export default class Board extends Component {

    componentDidMount=()=>{

        const currentComponent = this
        const _id = this.props.match.params.id

        currentComponent.setState({_id: _id})

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

        axios.get('/api/users/authenticate').then(function(response){

            currentComponent.setState({authenticatedUser: response.data.authenticatedUser})

            axios.get(`/api/projects/${_id}`).then(function(response){
                currentComponent.setState({project: response.data})
            }).catch(function(error){console.log(error)})

        }).catch(function(error){
            console.log(error)
            window.location='/login'
        })
    }
    
    render() {
        return (
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
        )
    }
}
