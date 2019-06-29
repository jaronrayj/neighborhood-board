import React from "react";
import "./Post.css";

//render cards for the feed 
    //use loop to go through the array of feed data

function Post(props) {
    return (

      <div class="card text-center">

        <div class="card-header">
          {props.username}
        </div>

        <div class="card-body">

          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.body}</p>

          <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
          <button type="button" class="btn btn-outline-secondary btn-sm">Edit</button>
          <button type="button" class="btn btn-outline-info btn-sm">Comment</button>

        </div>

        <div class="card-footer text-muted">
          {props.date}
        </div>

      </div>

    )
  }

  export default Post;
