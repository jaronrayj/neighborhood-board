import { useState } from 'react';

function useEvent() {
    const [events, setEvents] = useState({});


    fetch("/api/events")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            setEvents(data);
        }, []);

    return events;
};

export default useEvent;