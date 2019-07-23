import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react'

function Event(props) {


    return (
        <Feed>
            <Feed.Event>
                {/* <Feed.Label>{props.img}</Feed.Label> */}
                <Feed.Content>
                    <h4>{props.title}</h4>

                    <h5>User: {props.username}</h5>
                    <p>{props.description}</p>
                    <p>${props.price}</p>
                    <p>{props.contactPhone}</p>
                    <p>{props.contactEmail}</p>

                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
}

export default Event;