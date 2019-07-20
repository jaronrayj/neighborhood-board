import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EventModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.state = {
            show: false,
            title: "",
            description: "",
            startDate: ""
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleClose() {
        this.props.loadData();
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, description, startDate } = this.state;
        console.log(title, description, startDate);

        Axios.post('/api/events', { title, description, startDate })
            .then((result) => {
                console.log(result);
                this.handleClose();
            })

        this.setState({
            title: "",
            description: "",
            // date: "",
            // startDate: 
        })

    }


    render() {
        return (
            <>
                <Button variant="secondary" size="sm" onClick={this.handleShow}>
                    Post
            </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Create an Event</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group id="eventTitle">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control as="input" placeholder="What's happening?" value={this.state.title} onChange={this.handleInputChange} name="title" />
                            </Form.Group>
                            <Form.Group id="eventDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="What to bring? Where's it at?" value={this.state.description} onChange={this.handleInputChange} name="description" />
                            </Form.Group>
                            <Form.Group id="eventDate">
                                <Form.Label>Date of Event: </Form.Label>
                                <br />
                                <DatePicker
                                    placeholderText="i.e. 06/07/2019"
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}
                                />
                            </Form.Group>
                            {/* <Form.Group id="eventTime">
                                <Form.Label>Time of Event</Form.Label>
                                <Form.Control as="input" value={this.state.startTime} onChange={this.handleInputChange} name="startTime" />
                            </Form.Group> */}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="outline-danger">Close</Button>
                        <Button variant="outline-primary" onClick={this.handleSubmit}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EventModal;