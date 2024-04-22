import { useEffect, useState } from "react";
import ReportCard from "./ReportCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./styles.module.css";
import { getReservationsBetweenDates } from "@/store/reservations/reservationService";

const getReservations = async (start: Date, end: Date) => {
  const data = await getReservationsBetweenDates(start, end);
  return data.data;
};

const ReportBetweenDates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );

  const [reservations, setReservations] = useState(0);
  useEffect(() => {
    if (startDate && endDate) {
      getReservations(startDate, endDate).then((data) => {
        setReservations(data);
      });
    }
  }, [startDate, endDate]);

  return (
    <ReportCard
      title="Report the quantity of bookings between two dates"
      className="cols-span-2 w-1/3"
    >
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Choose the date you need know the reservations
      </p>

      <article className="grid grid-cols-2 gap-x-10">
        <section>
          <div className="flex gap-2 flex-col my-4">
            <div className={styles.datepicker_container}>
              <span className="text-zinc-500">from</span>
              <DatePicker
                selected={startDate}
                className="p-2 bg-zinc-200 rounded-md border border-zinc-800"
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
            <div className={styles.datepicker_container}>
              <span className="text-zinc-500">until</span>
              <DatePicker
                selected={endDate}
                className="p-2 bg-zinc-200 rounded-md border border-zinc-800"
                onChange={(date: Date) => setEndDate(date)}
              />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <span className="text-7xl">{reservations}</span>
        </section>
      </article>
    </ReportCard>
  );
};

export default ReportBetweenDates;