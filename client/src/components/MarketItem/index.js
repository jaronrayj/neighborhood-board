import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react';


function Event(props) {


    return (
        <Feed>
            <Feed.Event>
                {/* <Feed.Label>{props.img}</Feed.Label> */}
                <Feed.Content>
                    <h4>{props.title}</h4>

                    <h5>{props.userId}</h5>
                    <p >{props.description}</p>
                    <p>${props.price}</p>
                    <p>{props.contactPhone}</p>
                    <p>{props.contactEmail}</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/neighborhood-board.appspot.com/o/photos%2Fpuppies.jpeg?alt=media&token=bd0ce755-093c-4761-9b49-c425b1d4464f" style={{ width: "300px" }} alt="" />

                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
}

export default Event;