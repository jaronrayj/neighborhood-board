import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

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
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="eventDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="eventDate">
                                <Form.Label>Date of Event</Form.Label>
                                {/* this form.control might not work */}
                                <Form.Control as="input" />
                            </Form.Group>
                            <Form.Group id="eventTime">
                                <Form.Label>Time of Event</Form.Label>
                                <Form.Control as="time" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default EventModal;