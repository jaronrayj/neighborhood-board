import React from "react";
import "./Post.css";


//render cards for the feed 
    //use loop to go through the array of feed data

function Post(props) {
    return (
      <div className="post">

        <div className="header">
          <h1 className="user-name">{props.username}<span className="date">{props.date}</span></h1>
        </div>

        <div>{props.title}</div>

        <hr />

          <div className="post-body">{props.body}</div>

        <div className="footer">
          <button className="delete-button">Delete</button>
          <button className="edit-button">Edit</button>
          <button className="comments">Comment</button>
        </div>

      </div>
    )
  }

  export default Post;