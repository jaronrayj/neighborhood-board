import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'


function Event(props) {

    const phoneNumber = parsePhoneNumberFromString(props.contactPhone, 'US')
    console.log("TCL: Event -> props.contactPhone", props.contactPhone);
    console.log("TCL: Event -> phoneNumber", phoneNumber);
    // const formattedPhone = phoneNumber.formatNational()
    // console.log("TCL: Event -> formattedPhone", formattedPhone);


    return (
        <Feed>
            <Feed.Event>
                {/* <Feed.Label>{props.img}</Feed.Label> */}
                <Feed.Content>
                    <h4>{props.title}</h4>

                    {/* <h5>User: {props.username}</h5> */}
                    <p>{props.description}</p>
                    <p>${parseFloat(props.price).toFixed(2)}</p>
                    <p>Cell: {phoneNumber.formatNational()}</p>
                    {/* <p>{props.contactEmail}</p> */}

                </Feed.Content>
            </Feed.Event>
            <hr />
        </Feed>
    );
}

export default Event;