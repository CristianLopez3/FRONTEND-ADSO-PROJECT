import { Event } from "@/types/Event";

type EventMobileItemProps = {
  event: Event;
};

const EventMobileItem: React.FC<EventMobileItemProps> = ({ event }) => {
  return (
    <>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <picture>
        <caption>{event.image}</caption>
      </picture>
    </>
  );
};

export default EventMobileItem;
