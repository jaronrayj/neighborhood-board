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

        this.state = {
            show: false,
            title: "",
            description: "",
            date: new Date(),
            startTime: ""
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleChange(date) {
        this.setState({
            date: date
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, description, date, startTime } = this.state;

        Axios.post('/api/events', { title, description, date, startTime })
            .then((result) => {
                console.log(result);
            })

        this.setState({
            title: "",
            description: "",
            date: "",
            startTime: ""
        })

        this.handleClose();
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
                                <Form.Control as="textarea" value={this.state.title} onChange={this.handleInputChange} name="title" />
                            </Form.Group>
                            <Form.Group id="eventDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={this.state.description} onChange={this.handleInputChange} name="description" />
                            </Form.Group>
                            <Form.Group id="eventDate">
                                <Form.Label>Date of Event</Form.Label>
                                {/* <Form.Control as="input" value={this.state.date} onChange={this.handleInputChange} name="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" /> */}
                                <DatePicker as="input" value={this.state.date} onChange={this.handleChange} name="date" />
                                <Form.Text className="text-muted">eg: 06/06/06</Form.Text>
                            </Form.Group>
                            <Form.Group id="eventTime">
                                <Form.Label>Time of Event</Form.Label>
                                <Form.Control as="input" value={this.state.startTime} onChange={this.handleInputChange} name="startTime" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="danger">Close</Button>
                        <Button variant="outline-primary" onClick={this.handleSubmit}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EventModal;