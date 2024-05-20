import Button from "@/components/Button";
import { Event } from "@/utils/types/Event";


type EventCardProps = {
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, description, discount, url } = event;
  const image = `http://localhost:8080/api/v1/file/${url}`;

  return (
    <>
      <section className="mt-8 xl:flex justify-between text-zinc-300">
        <article className="text-center lg:text-start xl:max-w-[50%] flex-center flex-col p-4 lg:p-6 lg:pr-12 gap-y-4">
          <h2 className="text-zinc-200 text-2xl lg:text-4xl font-semibold">
            {title}
          </h2>
          <p className="text-center lg:p-8 lg:text-lg ">{description}</p>
          <div className="flex-center gap-6">
            <p className="text-zinc-400">
              Just for now, {discount}% of discount{" "}
            </p>
            <Button
              variant="light"
              className="bg-zinc-900"
              content="Book now!"
              disabled
            />
          </div>
        </article>
        <picture className="my-4 xl:max-w-[50%] flex-center">
          <img
            src={image}
            alt="events"
            loading="lazy"
            className="max-h-[700px]"
          />
        </picture>
      </section>
    </>
  );
};
export default EventCard;
