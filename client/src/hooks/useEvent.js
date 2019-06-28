import { useState, useEffect } from 'react';

function useEvent() {
    const [events, setEvents] = useState({});

    useEffect(() => {
        fetch("/api/events")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setEvents(data)
            });
    }, []);

    return events;
};

export default useEvent;