import React from 'react';
// import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'

function EventContainer() {
    // const events = useEvent();

    const events = [{
        title: "title",
        description: "description box",
        date: "2/13/2019"
    },
    {
        title: "title",
        description: "description box",
        date: "2/13/2019"
    }];

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
                        events.map(e =>
                            <>
                                <Event
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

export default EventContainer;

