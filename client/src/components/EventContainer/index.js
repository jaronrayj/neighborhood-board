import React from 'react';
import useEvent from '../../hooks/useEvent';
import Event from '../Event'

function EventContainer() {
    const events = useEvent();

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

