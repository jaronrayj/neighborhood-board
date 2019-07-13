import React, { Component } from "react";
import axios from "axios";
import Post from "../Post";
import "./Discussion.css";
import ModalDiscussion from "../PostsModal";

export default class Feed extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("/api/discussions/")
            .then(res => {
                const posts = res.data;
                //this refers to the Feed class so basically = "Feed.setState"
                this.setState({ posts });
            });
    }

    render() {
        return (
            <div className="feed-body">

                <ModalDiscussion />
                {this.state.posts.map(post => <Post data={post}/>)}
            </div>
        );
    }
};