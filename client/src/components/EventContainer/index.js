import React, { Component } from 'react';
// import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'
import Axios from 'axios';
import "./style.css";

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
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
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
                                <Event
                                    key={e._id}
                                    title={e.title}
                                    description={e.description}
                                    startDate={e.startDate}
                                />
                            )
                        }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default EventContainer;

