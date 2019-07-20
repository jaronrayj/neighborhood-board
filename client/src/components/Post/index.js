import React from "react";
// import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import "./Post.css";

import PostUpdateModal from "../PostUpdateModal";

// import { Feed } from "semantic-ui-react";
const axios = require("axios");


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false,
      title: "",
      body: ""
    };
  }

  deleteClick = (event) => {
    let source = event.target || event.srcElement;
    event.preventDefault();
    console.log("Delete button clicked");

    let postId = source.getAttribute("id").replace("delete-btn-", "");

    axios.delete("/api/discussions/" + postId)
      .then(req => {
        console.log("Deleted post at id: " + postId + "!");
        this.props.loadData();
      })
      .catch(err => {
        this.props.loadData();

        console.log("Error occured while tryin to delete post at id: " + postId);
      });

  }

  render() {
    if (this.state.isDeleted) {
      return;
    }

    return (

      <Card className='m-3'>
        <Card.Header>
          <span>{this.props.data.username}</span>
          {/* <span className="time-span">{this.props.data.date}</span> */}
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <Button data-id={this.props.data._id} onClick={commentClick} className="post-comment-button" variant="outline-info" size="sm">Comment</Button> */}
          <PostUpdateModal
            loadData={this.props.loadData}
            postId={this.props.data._id}
            body={this.props.data.body}
            title={this.props.data.title}
          />
          {/* <Button data-id={this.props.data._id} onClick={editClick} className="post-edit-button" variant="outline-secondary" size="sm">Edit</Button> */}
          <Button id={"delete-btn-" + this.props.data._id} onClick={this.deleteClick} className="post-delete-button" variant="outline-danger" size="sm">Delete</Button>
        </Card.Footer>
      </Card>

    )
  }
}

