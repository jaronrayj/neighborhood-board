import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';

class ModalDiscussion extends Component {
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

                    {/* <Modal.Dialog> */}
                    <Modal.Header closeButton>
                        <Modal.Title>Make a Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group id="discussionTitle">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="discussionBody">
                                <Form.Label>Posts</Form.Label>
                                <Form.Control as="textarea" rows="10" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                    {/* </Modal.Dialog> */}
                </Modal>
            </>
        );
    }
}


export default ModalDiscussion;