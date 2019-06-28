import React from 'react';
import useEvent from '../../hooks/useEvent';
import Event from '../Event'

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
    }]

    return (
        <>
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
        </>
    )
}

export default EventContainer;

