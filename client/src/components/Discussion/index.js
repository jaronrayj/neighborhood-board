import React from "react";
import Post from "../Post";
import "./Discussion.css";
import ModalDiscussion from "../PostsModal";

function Feed(dataFromDataBase) {
    //I will need to figure out how to connect to the db when we have it created
    //this is just filler test data
    const posts = [
        {
            username: "Username1",
            title: "Subject Line",
            date: "10/1/20",
            body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."

        },
        {
            username: "Username2",
            title: "Subject Line",
            date: "6/6/20",
            body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."

        },
        {
            username: "Username3",
            title: "Subject Line",
            date: "8/12/20",
            body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form"

        }
    ];

    return (
        <div className="feed-body">

            <ModalDiscussion />
            {posts.map(post => Post(post))}
        </div>
    );
}

export default Feed;