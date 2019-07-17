import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react'

function updateDate(date) {
    console.log("TCL: updateDate -> date", date);
    let splitDate = date.split("-")
    console.log("TCL: updateDate -> splitDate", splitDate);
    let day = splitDate[2].split("T")
    console.log("TCL: updateDate -> splitDate", splitDate);

    const newDate = {
        month: splitDate[1],
        year: splitDate[0],
        day: day[0]
    }



    return newDate
}

function Event(props) {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const date = updateDate(props.startDate);

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