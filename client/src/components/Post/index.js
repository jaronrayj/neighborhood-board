import React from "react";
import { Card, Button } from 'react-bootstrap';
import "./Post.css";

import PostUpdateModal from "../PostUpdateModal";

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

  renderUsersPost = () => {
    return (
  
      <Card className='m-3'>
        <Card.Header>
          <span>{this.props.data.username}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <PostUpdateModal
            loadData={this.props.loadData}
            postId={this.props.data._id}
            body={this.props.data.body}
            title={this.props.data.title}
          />
          <Button id={"delete-btn-" + this.props.data._id} onClick={this.deleteClick} className="post-delete-button" variant="outline-danger" size="sm">Delete</Button>
        </Card.Footer>
      </Card>
  
    )
  }

  renderOtherPost = () => {
    return (
  
      <Card className='m-3'>
        <Card.Header>
          <span>{this.props.data.username}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
  
    )
  }

  render() {
    if (this.state.isDeleted) {
      return;
    }
    let user = this.props.getUser();
    if (user && user.displayName == this.props.data.username){
      return this.renderUsersPost();
    } else {
      return this.renderOtherPost();
    }

  }
}

