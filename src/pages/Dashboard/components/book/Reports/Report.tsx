import styles from "./styles.module.css";
import "react-datepicker/dist/react-datepicker.css";
import ChartTwoMonths from "./ChartTwoMonths";
import Chart from "../../dashboard/Chart";
import { PiBook } from "react-icons/pi";
import Card from "../../dashboard/Card";
import ReportBetweenDates from "./ReportBetweenDates";

const Report = () => {
  // console.log(new Date().toISOString().substring(0, 19));
  return (
    <>
      <header>
        <main className={styles.main}>
          <section className={styles.section}>
            <ReportBetweenDates />
            <ChartTwoMonths className="max-w-[600px] flex justify-center items-center" />
            <Chart className="col-span-1 md:col-span-2 w-full h-[400px]" />

            <div>
              <div className="w-1/2">
                <Card
                  title="Reservations"
                  count={10}
                  variant="r-right"
                  icon={<PiBook />}
                />
              </div>
            </div>
          </section>
        </main>
      </header>
    </>
  );
};

export default Report;
