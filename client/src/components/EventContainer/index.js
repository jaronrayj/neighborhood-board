import React from 'react';
// import useEvent from '../../hooks/useEvent';
import Event from '../Event'
import { Card } from 'semantic-ui-react'
import EventModal from '../EventModal'
// import ajax from "ajax";

function EventContainer() {

    // useEffect(() => {
    //     return () => {
    //         events = useEvent()
    //     };
    // }, [])

    const events = [
        {
            "title": "Fireworks at the Park",
            "date": "4/31/19",
            "description": "Come join us for Fireworks in the Park."
            
        },
        {
            "title": "Fireworks at the Park",
            "date": "4/31/19",
            "description": "Come join us for Fireworks in the Park."
       
        },
        {
            "title": "Neighborhood Clean Up",
            "date": "5/21/18",
            "description": "All hands on deck! Come help with a neighborhood service project! We will be cleaning up the streets."
            
        },
        {
            "title": "Back to School Night",
            "date": "6/17/29",
            "description": "Come meet your teachers at Back to School Night!"
            
        },
        {
            "title": "Community Theater at the Band Stand",
            "date": "5/18/30",
            "description": "Free Community Theater come watch Watcher in the Woods"
            
        }
    ]


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

