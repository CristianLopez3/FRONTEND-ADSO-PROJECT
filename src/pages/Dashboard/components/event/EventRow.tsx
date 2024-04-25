import {Event} from '@/utils/types/Event';

type EventRowProps = {
    event: Event;
}

const EventRow: React.FC<EventRowProps
> = ({
    event
}) => {
    return(
        <>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <picture>
                <caption>{event.image}</caption>
            </picture>
        </>
    )
}

export default EventRow;