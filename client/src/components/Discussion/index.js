import React, { Component } from "react";
import axios from "axios";
import Post from "../Post";
import "./Discussion.css";
import ModalDiscussion from "../PostsModal";

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }


    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        axios.get("/api/discussions/")
            .then(res => {
                const posts = res.data;
                //this refers to the Feed class so basically = "Feed.setState"
                this.setState({ posts });
            });

    }


    render() {
        return (

            <div className="discussion-body">
                <ModalDiscussion className='ml-5'
                    loadData={this.loadData}
                />
                <div className="feed-body">
                    {this.state.posts.map(post => {
                        return <Post
                            key={post._id}
                            loadData={this.loadData}
                            data={post}
                        />
                    })}
                </div>
            </div>
        );
    }
};