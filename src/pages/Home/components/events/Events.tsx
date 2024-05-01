import Button from "@/components/Button";
import { ROUTES } from "@/routes/constants";
import { Link } from "react-router-dom";


const Events = () => {
  return (
    <section className="mt-28 lg:flex justify-between text-zinc-300">
      <article className="text-center lg:text-start lg:max-w-[50%] flex-center flex-col p-4 lg:p-6 lg:pr-12 gap-y-4">
        <h2 className="text-zinc-200 text-2xl lg:text-4xl font-semibold">
        Celebrate Labor Day with us
        </h2>
        <p className="text-base lg:p-8 lg:text-lg ">
            Join us on for an unparalleled dining experience as we celebrate the spirit of hard work and dedication. Enjoy a special day with your colleagues, friends, and family in a cozy and relaxed atmosphere.
            From delicious dishes inspired by local cuisine to craft cocktails and exceptional service, at MenuEASY, we take pride in offering a top-notch culinary experience for all our guests.
            Additionally, to make this day even more special, we will be offering exclusive promotions and surprises for our diners. Don't miss out!
            Book your table now and join us to celebrate Labor Day in style at MenuEASY.
        </p>
        <div className="flex-center gap-6">
          <p className="text-zinc-400">Just for now, 30% of discount  </p>
          <Link to={ROUTES.HOME.BOOK}>
            <Button variant="light" className="bg-zinc-900" content="Book now!" />
          </Link>
        </div>
      </article>
      <picture className="my-4  lg:max-w-[50%] flex-center">
        <img src="event.webp" alt="events" loading="lazy" />
      </picture>
    </section>
  )
}

export default Events;