import { RiArrowGoBackLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/constants";
import DashboardNavbar from "../../dashboard/DashboardNavbar";
import Button from "@/components/Button";

import styles from "./styles.module.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Report = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
            <article className={styles.card_container}>
              <a href="#">
                <h5>Report the quantity of bookings the last month</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                this month you need the quantity of bookings of the last month
              </p>
              <Button variant="dark">Generate Report</Button>
            </article>

            <article className={styles.card_dates}>
              <a href="#">
                <h5>Report the quantity of bookings between two dates</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                this month you need the quantity of bookings of the last month
              </p>
          

              <div className="flex items-center my-4">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>

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

              <Button variant="dark">Generate Report</Button>
            </article>
          </section>
        </main>
      </header>
    </>
  );
};

export default Report;
