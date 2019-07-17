import React from "react";
// import axios from "axios";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./Post.css";
// import { Feed } from "semantic-ui-react";
const axios = require("axios");

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false
    };
  }

  deleteClick = (event) => {
    let source = event.target || event.srcElement;
    console.log(source);
    event.preventDefault();
    console.log("Delete button clicked");

    let postId = source.getAttribute("id").replace("delete-btn-", "");

    axios.delete("/api/discussions/" + postId)
      .then(req => {
        console.log("Deleted post at id: " + postId + "!");
        //TODO: reload web page
        this.props.loadData();
      })
      .catch(err => {
        this.props.loadData();

        console.log("Error occured while tryin to delete post at id: " + postId);
      });

  }

  render(){
    if(this.state.isDeleted) {
      return;
    }


    function commentClick(event){
      event.preventDefault();
      console.log("Comment button clicked");
      //pull up a modal to leave a comment
      //it will need a body area and a submit button
    }

    function editClick(event){
      event.preventDefault();
      console.log("Edit button clicked")
      //possibly pulls up a modal like the write post form
      //2nd option, update the clicked on post
      //1st option, delete old post and when new post submited it will be a new data entry
    }
    
    return (

      <Card>
        <Card.Header>
          <span>{this.props.data.username}</span>
          <span className="time-span">{this.props.data.date}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.data.title}</Card.Title>
          <Card.Text>{this.props.data.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button data-id={this.props.data._id} onClick={commentClick} className="post-comment-button" variant="outline-info" size="sm">Comment</Button>
          <Button data-id={this.props.data._id} onClick={editClick} className="post-edit-button" variant="outline-secondary" size="sm">Edit</Button>
          <Button id={"delete-btn-"+this.props.data._id} onClick={this.deleteClick} className="post-delete-button" variant="outline-danger" size="sm">Delete</Button>
        </Card.Footer>
      </Card>

    ) 
  }
}

