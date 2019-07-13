import React, { Component } from 'react';
// import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'
import Axios from 'axios';


// const events= [
//     {
//         "_id": "23213241",
//         "title": "Fireworks at the Park",
//         "date": "4/31/19",
//         "description": "Come join us for Fireworks in the Park."

//     },
//     {
//         "_id": "232132e2",
//         "title": "Fireworks at the Park",
//         "date": "4/31/19",
//         "description": "Come join us for Fireworks in the Park."

//     },
//     {
//         "_id": "232133232",
//         "title": "Neighborhood Clean Up",
//         "date": "5/21/18",
//         "description": "All hands on deck! Come help with a neighborhood service project! We will be cleaning up the streets."

//     },
//     {
//         "_id": "232de1",
//         "title": "Back to School Night",
//         "date": "6/17/29",
//         "description": "Come meet your teachers at Back to School Night!"

//     },
//     {
//         "_id": "232132fwe3",
//         "title": "Community Theater at the Band Stand",
//         "date": "5/18/30",
//         "description": "Free Community Theater come watch Watcher in the Woods"

//     }
// ]

class EventContainer extends Component {

    state = {
        events: []
    }


    componentDidMount = () => {

        const currentComponent = this;

        Axios.get("/api/events").then(function (res) {
            currentComponent.setState({ events: res.data })
        }).catch(function (err) {
            console.log(err);
        })
    }


    render() {

        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Upcoming Events
                    <EventModal />
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {
                            this.state.events.map(e =>
                                <>
                                    <Event
                                        key={e._id}
                                        title={e.title}
                                        description={e.description}
                                        date={e.date}
                                    />
                                </>
                            )
                        }
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default EventContainer;

