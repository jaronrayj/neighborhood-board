import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { Component } from 'react';
import axios from "axios";
// import FileBase from 'react-file-base64';
import { storage } from '../../firebase-config';
// import { firebase } from '../../firebase-config';
import DefaultImage from '../../assets/defaultImage.png';


// base api url being used
const API_URL = "http://localhost:3000";

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
            multerImage: DefaultImage,
            firebaseImage: DefaultImage,
            baseImage: DefaultImage,
            contactPhone: ""
        };
    }

    setDefaultImage(uploadType) {
        if (uploadType === "firebase") {
            this.setState({
                firebaseImage: DefaultImage
            });
        } else {
            this.setState({
                baseImage: DefaultImage
            });
        }
    }
    // setDefaultImage(uploadType) {
    //     if (uploadType === "multer") {
    //         this.setState({
    //             multerImage: DefaultImage
    //         });
    //     } else if (uploadType === "firebase") {
    //         this.setState({
    //             firebaseImage: DefaultImage
    //         });
    //     } else {
    //         this.setState({
    //             baseImage: DefaultImage
    //         });
    //     }
    // }

    //function to upload image once it has been captured
    //includes multer and firesbase methods
    uploadImage(e, method) {
        let imageObj = {};

        // if (method === "multer") {
        //     let imageFormObj = new FormData();

        //     imageFormObj.append("imageName", "multer-image-" + Date.now());
        //     imageFormObj.append("imageData", e.target.files[0]);

        // //stores a readable instance of the image being uploaded using multer
        // this.setState({
        //     multerImage: URL.createObjectURL(e.target.files[0])
        // });

        // axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
        //     .then((data) => {
        //         if (data.data.success) {
        //             alert("Image has been successfully uploaded using multer");
        //             this.setDefaultImage("multer");
        //         }
        //     })
        //     .catch((err) => {
        //         alert("Error while uploading image using multer");
        //         this.setDefaultImage("multer");
        //     });
        // } else 
        // if (method === "firebase") {

        // // ===========FIREBASE=================
        //     let currentImageName = "firebase-image-" + Date.now();

        //     let uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]);

        //     uploadImage.on('state_changed',
        //     (snapshot) => { },
        //     (error) => {
        //         alert(error);
        //     },
        //     () => {
        //         storage.ref('images').child(currentImageName).getDownloadURL().then(url => {

        //             this.setState({
        //                 firebaseImage: url
        //             });

        //             //store image object in the database
        //             imageObj = {
        //                 imageName: currentImageName,
        //                 imageData: url
        //             };

        //             axios.post(`${API_URL}/image/uploadbase`, imageObj)
        //                 .then((data) => {
        //                     if (data.data.success) {
        //                         alert("Image has been successfully uploaded using firebase storage");
        //                         this.setDefaultImage("firebase");
        //                     }
        //                 })
        //                 .catch((err) => {
        //                     alert("Error while uploading image using firebase storage")
        //                     this.setDefaultImage("firebase");
        //                 });
        //         })
        //     })
        // }



        //==========this works================
        let file = e.target.files[0];

        var storageRef = storage.ref('photos/' + file.name);

        var task = storageRef.put(file);

        // file.on('state_changed',
        //     (snapshot) => { },
        //     (error) => {
        //         alert(error);
        //     },
        //     () => {
        //         storage.ref('photos/').child(file.name).getDownloadURL().then(url => {
        //             this.setState({
        //                 firebaseImage: url

        //             });
        //         })
        //     }
        //     )





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
        console.log("THis works");


        const { title, description, price, contactPhone } = this.state;

        axios.post('/api/markets', { title, description, price, contactPhone })
            .then((result) => {
                console.log(result);
            })

        this.setState({
            title: "",
            description: "",
            price: "",
            contactPhone: ""
        })
        this.handleClose();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <Button variant="secondary" size="sm" onClick={this.handleShow}>
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
                                <Form.Control as="input" value={this.state.title} onChange={this.handleInputChange} name="title" />
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
                            <Form.Group id="marketItemPhone">
                                <Form.Label>Contact Phone #</Form.Label>
                                <Form.Control as="input" value={this.state.contactPhone} onChange={this.handleInputChange} name="contactPhone" />
                            </Form.Group>

                            <Form.Group id="marketItemImg">
                                <Form.Label>Insert image of product</Form.Label>
                                {/* <Form.Control as="file" className="process_upload-btn" onChange={(e) => this.uploadImage(e, "multer")} /> */}
                                {/* <img src={this.state.firebaseImage} alt="upload-image" className="process_image" />  */}

                                {/* this might not work as well "file" */}
                                {/* insert code for image multer image classname etc
                            <div className="process">
                                <h4 className="process_heading">Process: Using Multer</h4>
                                <p className="process_details">Upload image to a node server, connected to a MongoDB database, with teh help of multer</p>
                             
                                <input type="file" className="process_upload-btn" onChange={(e) => this.uploadImage(e, "multer")} />
                                <img src={this.state.multerImage} alt="upload-image" className="process_image" />
                            </div> */}

                                {/*insert code for firebase storage*/}

                                <div className="process">
                                    <h4 className="process_heading">Process: Using Firebase Storage</h4>
                                    <p className="process_details">Upload image to Firebase storage and retrieve a reference to the image</p>

                                    <input type="file" className="process_upload-btn" onChange={(e) => this.uploadImage(e, "multer")} />
                                    <img src={this.state.firebaseImage} alt="upload-image" className="process_image" />
                                </div>

                                {/* insert code for Base64
                            <div className="process">
                                <h4 className="process_heading">Process: Using Base64</h4>
                                <p className="process_details">Upload image as Base64 directly to MongoDB database</p>

                            <div className="process_upload-btn">
                                <FileBase type="file" multiple={false} noDone={this.getBaseFile.bind(this)} />
                            </div>
                                <img src={this.state.baseImage} alt="upload-image" className="process_image" />>
                            </div> */}


                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose} variant="danger">Close</Button>
                        <Button onClick={this.handleSubmit} variant="outline-primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MarketplaceModal;