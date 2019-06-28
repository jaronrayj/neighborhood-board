import './style.css';
import React, { useState } from 'react';

function Event(props) {


    return (
        <>
            <h4>{props.title}</h4>

            <p>{props.description}</p>

            <p>{props.date}</p>
        </>
    );
}

export default Event;