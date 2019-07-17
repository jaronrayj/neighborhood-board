import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react'

function updateDate(date) {
    let splitDate = date.split("-")
    let day = splitDate[2].split("T")

    const newDate = {
        month: splitDate[1],
        year: splitDate[0],
        day: day[0]
    }



    return newDate
}

function Event(props) {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const date = updateDate(props.date);

    return (
        <Feed>
            <Feed.Event>
                <Feed.Label>
                    <h5>{months[date.month - 1]}</h5>
                    <h4>{date.day}</h4>
                </Feed.Label>
                <Feed.Content>
                    <h4>{props.title}</h4>

                    <p>{props.description}</p>

                </Feed.Content>
            </Feed.Event>
            <hr/>
        </Feed>    
    );
}

export default Event;