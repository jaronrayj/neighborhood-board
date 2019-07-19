import React, { Component } from 'react';
// import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'
import Axios from 'axios';
import "./style.css";


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
        this.loadData();
    }

    loadData = () => {
        const currentComponent = this;

        Axios.get("/api/events").then(function (res) {
            currentComponent.setState({ events: res.data })
            console.log("TCL: EventContainer -> loadData -> res.data", res.data);
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        console.log("TCL: EventContainer -> render -> , EVENTS");
        console.log("TCL: EventContainer -> render -> this.state.events", this.state.events);
        return (
            <div className="event-container">
                <Card>
                    <Card.Content>
                        <Card.Header>Upcoming Events
                        <EventModal
                                loadData={this.loadData}
                            />
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
                                        startDate={e.startDate}
                                    />
                                </>
                            )
                        }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default EventContainer;

