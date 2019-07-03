import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';

class MarketplaceModal extends Component {
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
                        <Modal.Title>Post Item To Marketplace</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group id="marketItemTitle">
                                <Form.Label>Item for sale name</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="marketItemDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="marketItemPrice">
                                <Form.Label>Cost</Form.Label>
                                {/* this form.control might not work */}
                                <Form.Control as="input" />
                            </Form.Group>
                            <Form.Group id="marketItemImg">
                                <Form.Label>Insert image of product</Form.Label>
                                {/* this might not work as well "file" */}
                                <Form.Control as="file" />
                            </Form.Group>
                            <Form.Group id="marketItemEmail">
                                <Form.Label>Contact Email</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                            <Form.Group id="marketItemPhone">
                                <Form.Label>Contact Phone #</Form.Label>
                                <Form.Control as="textarea" />
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

export default MarketplaceModal;