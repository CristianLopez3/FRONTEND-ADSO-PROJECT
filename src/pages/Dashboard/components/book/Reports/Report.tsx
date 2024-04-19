import { RiArrowGoBackLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/constants";
import DashboardNavbar from "../../dashboard/DashboardNavbar";
import Button from "@/components/Button";

import styles from "./styles.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getMonthlyReservations,
  getReservationsBetweenDates,
} from "@/store/reservations/reservationService";
import ReportCard from "./ReportCard";

const Report = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );

  const generateReport = async () => {
    const monthlyReservations = await getMonthlyReservations();
    console.log("Monthly Reservations:", monthlyReservations);

    const reservationsBetweenDates = await getReservationsBetweenDates(
      startDate.toISOString().substring(0, 19),
      endDate.toISOString().substring(0, 19)
    );
    console.log("Reservations Between Dates:", reservationsBetweenDates);
  };

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2 className={styles.title}>
            <div className={styles.title_line} />
            Reports
          </h2>
          <div className="flex justify-around gap-2">
            <Link
              to={ROUTES.DASHBOARD.RESERVATIONS.ROOT}
              className={styles.button_back}
            >
              Back <RiArrowGoBackLine />
            </Link>
          </div>
        </DashboardNavbar>
        <main className={styles.main}>
          <section className={styles.section}>
            <ReportCard title="Report the quantity of Bookings the last month">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                this month you need the quantity of bookings of the last month
              </p>
              <Button variant="dark" content="Generate Report" />
            </ReportCard>

            <ReportCard
              title="Report the quantity of bookings between two dates"
              className="col-span-2"
            >
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                this month you need the quantity of bookings of the last month
              </p>

              <div className="flex items-center my-4">
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    className="p-2 bg-zinc-200 rounded-md border border-zinc-800"
                    onChange={(date: Date) => setStartDate(date)}
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    className="p-2 bg-zinc-200 rounded-md border border-zinc-800"
                    onChange={(date: Date) => setEndDate(date)}
                  />
                </div>
              </div>
              <Button
                variant="dark"
                content="Generate Report"
                onClick={generateReport}
              />
            </ReportCard>
          </section>
        </main>
      </header>
    </>
  );
};

export default Report;
