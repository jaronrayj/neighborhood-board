import React, {useEffect} from 'react';
import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'
// import ajax from "ajax";

function EventContainer() {

    let events;
    
    useEffect(() => {
        return () => {
            events = useEvent();
        };
    }, [events])




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

