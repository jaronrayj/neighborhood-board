import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import Axios from 'axios';

class EventModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: "",
            description: "",
            date: "",
            time: ""
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, description, date, time } = this.state;

        Axios.post('/api/events', { title, description, date, time })
            .then((result) => {
                console.log(result);
            })

        this.setState({
            title: "",
            description: "",
            date: "",
            time: ""
        });
    };

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
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
                                {/* this form.control might not work */}
                                <Form.Control as="input" value={this.state.date} onChange={this.handleInputChange} name="date" />
                            </Form.Group>
                            <Form.Group id="eventTime">
                                <Form.Label>Time of Event</Form.Label>
                                <Form.Control as="input" value={this.state.time} onChange={this.handleInputChange} name="time" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EventModal;