import React from "react";
import "./Post.css";

//render cards for the feed 
    //use loop to go through the array of feed data

function Post(props) {
    return (

      <div class="card">

        <div class="card-header">
          <span>{props.username}</span>

          <span className="time-span">{props.date}</span>
        </div>

        <div class="card-body">

          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.body}</p>

        </div>

        <div class="card-footer">

          <button type="button" class="post-comment-button btn btn-outline-info btn-sm">Comment</button>
          <button type="button" class="post-edit-button btn btn-outline-secondary btn-sm">Edit</button>
          <button type="button" class="post-delete-button btn btn-outline-danger btn-sm">Delete</button>

        </div>

      </div>

    )
  }

  export default Post;
