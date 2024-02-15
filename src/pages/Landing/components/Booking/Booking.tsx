import FormBooking from "./FormBooking";

const Booking = () => {
  return (
    <section>
      <div className="container-section">
        <h2>Book A Reservation</h2>
        <article className="w-[90%] mx-auto">
          <FormBooking />
        </article>
      </div>

    </section>
  );
};

export default Booking;
