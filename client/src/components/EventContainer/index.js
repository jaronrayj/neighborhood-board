import useEvent from '../../hooks/useEvent';
import Event from '../Event'

function EventContainer(){
    const events = useEvent();

    return (
        <Event {events.map()}/>
    )
}