import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react'

function Event(props) {


    return (
        <Feed>
            <Feed.Event>
                <Feed.Label>{props.startDate}</Feed.Label>
                <Feed.Content>
                    <h4>{props.title}</h4>

                    <p>{props.description}</p>

                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
}

export default Event;