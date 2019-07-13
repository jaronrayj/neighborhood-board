import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import Axios from 'axios';

class ModalDiscussion extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: "",
            body: ""
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
        this.props.loadData();
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, body } = this.state;

        Axios.post('/api/discussions', { title, body })
            .then((result) => {
                console.log(result);
            })

        this.setState({
            title: "",
            body: ""
        })

        this.handleClose();
    };

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
                                <Form.Control as="textarea" value={this.state.title} onChange={this.handleInputChange} name="title" />
                            </Form.Group>
                            <Form.Group id="discussionBody">
                                <Form.Label>Posts</Form.Label>
                                <Form.Control as="textarea" rows="10" value={this.state.body} onChange={this.handleInputChange} name="body" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button variant="primary" onClick={this.handleSubmit}>Save changes</Button>
                    </Modal.Footer>
                    {/* </Modal.Dialog> */}
                </Modal>
            </>
        );
    }
}


export default ModalDiscussion;