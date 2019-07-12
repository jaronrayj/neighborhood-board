import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import axios from "axios";

class MarketplaceModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: "",
            description: "",
            price: "",
            contactEmail: "",
            contactPhone: ""
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
        const { title, description, price, contactEmail, contactPhone } = this.state;

        axios.post('/api/markets', { title, description, price, contactEmail, contactPhone })
            .then((result) => {
                console.log(result);
            })

        this.setState({
            title: "",
            description: "",
            price: "",
            contactEmail: "",
            contactPhone: ""
        })
        this.handleClose();
        // console.log(this.state);
    };

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Post
            </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Post Item To Marketplace</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Item for sale name</Form.Label>
                                <Form.Control as="textarea" value={this.state.title} onChange={this.handleInputChange} name="title" />
                            </Form.Group>
                            <Form.Group id="marketItemDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={this.state.description} onChange={this.handleInputChange} name="description" />
                            </Form.Group>
                            <Form.Group id="marketItemPrice">
                                <Form.Label>Cost</Form.Label>
                                {/* this form.control might not work */}
                                <Form.Control as="input" value={this.state.price} onChange={this.handleInputChange} name="price" />
                            </Form.Group>
                            <Form.Group id="marketItemImg">
                                <Form.Label>Insert image of product</Form.Label>
                                {/* this might not work as well "file" */}
                                <Form.Control as="img" />
                            </Form.Group>
                            <Form.Group id="marketItemEmail">
                                <Form.Label>Contact Email</Form.Label>
                                <Form.Control as="textarea" value={this.state.contactEmail} onChange={this.handleInputChange} name="contactEmail" />
                            </Form.Group>
                            <Form.Group id="marketItemPhone">
                                <Form.Label>Contact Phone #</Form.Label>
                                <Form.Control as="textarea" value={this.state.contactPhone} onChange={this.handleInputChange} name="contactPhone" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        <Button onClick={this.handleSubmit} variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MarketplaceModal;