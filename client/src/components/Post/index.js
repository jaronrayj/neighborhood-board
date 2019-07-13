import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./Post.css";

//render cards for the feed 
    //use loop to go through the array of feed data

function Post(props) {

  function deleteClick(event){
    event.preventDefault();
    console.log("Delete button clicked");
    //ajax to routes, call delete post by post ID
    //1. get post id from event (event.source.getId)
    //2. ajax call with url
    //3. onsuccess, update the page to remove card
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
        <span>{props.username}</span>
        <span className="time-span">{props.date}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={commentClick} className="post-comment-button" variant="outline-primary" size="sm">Comment</Button>
        <Button onClick={editClick} className="post-edit-button" variant="outline-secondary" size="sm">Edit</Button>
        <Button onClick={deleteClick} className="post-delete-button" variant="outline-danger" size="sm">Delete</Button>
      </Card.Footer>
    </Card>

  ) 
}

  export default Post;
