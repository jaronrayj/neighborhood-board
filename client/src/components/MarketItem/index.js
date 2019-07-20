import './style.css';
import React from 'react';
import { Feed } from 'semantic-ui-react';
import { storage } from '../../firebase-config';


function getImg(imgUrl) {

    let storageRef = storage.ref(imgUrl);
    storageRef.child(imgUrl).getDownloadURL().then(function (url) {

        console.log(url)
        return url
    }).catch(function (error) {
        // Handle any errors
        if (error) throw (error);
    })
}

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

                    <img src={getImg(props.imgUrl)} style={{ width: "300px" }} alt="" />


                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
}

export default Event;