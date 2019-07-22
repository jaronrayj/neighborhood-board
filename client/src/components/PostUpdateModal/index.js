import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import axios from 'axios';
// import Post from "../Post";

class PostUpdateModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: "",
            body: "",
            posts: []
        };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleClose = () => {
        this.setState({ show: false });
        this.props.loadData();
    }


    handleShow = () => {
        this.setState({ show: true });
        this.setState({
            title: this.props.title,
            body: this.props.body
        });
    }

    handleEdit = event => {

        event.preventDefault();
        const { title, body } = this.state;

        axios.put('/api/discussions/' + this.props.postId, { title, body })
            .then(req => {
                console.log("Updated post at id: " + this.props.postId + "!");
            })
            .catch(err => {
                console.log("Error occured while tryin to Edit post at id: " + this.props.postId);
            });
                
        // this.setState({
        //     title: "",
        //     body: ""
        // });

        this.handleClose();
    }

    render() {
        return (
            <>
                <Button className="post-edit-button" variant="outline-secondary" size="sm" onClick={this.handleShow}>
                    Edit Post
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    {/* <Modal.Dialog> */}
                    <Modal.Header closeButton>
                        <Modal.Title>Update Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group id="discussionTitle">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control autofocus="true" as="textarea" value={this.state.title} onChange={this.handleInputChange} name="title"/>
                            </Form.Group>
                            <Form.Group id="discussionBody">
                                <Form.Label>Post Body</Form.Label>
                                <Form.Control as="textarea" rows="10" value={this.state.body} onChange={this.handleInputChange} name="body" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="danger">Close</Button>
                        <Button variant="outline-primary" onClick={this.handleEdit}>Save changes</Button>
                    </Modal.Footer>
                    {/* </Modal.Dialog> */}
                </Modal>
            </>
        );
    }
}


export default PostUpdateModal;