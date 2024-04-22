import styles from "./styles.module.css";
import "react-datepicker/dist/react-datepicker.css";
import ChartTwoMonths from "./ChartTwoMonths";
import Chart from "../../dashboard/Chart";

import ReportBetweenDates from "./ReportBetweenDates";
import Message from "@/components/Messages/Message";
import { LuBadgeCheck } from "react-icons/lu";

const Report = () => {
  // console.log(new Date().toISOString().substring(0, 19));
  return (
    <>
      <header>
        <main className={styles.main}>
          <section className={styles.section}>
            <article className={styles.article_charts}>
              <div className="md:col-span-2 lg:col-span-1">
                <ReportBetweenDates />
              </div>
              <ChartTwoMonths className="max-w-[600px] lg:ml-12 flex justify-center items-center lg:col-span-2" />
              <Chart className="col-span-1 md:col-span-2 w-full h-[300px] xl:h-[800px]" />
            </article>
            <article className="w-full 2xl:w-[50%]">
              <Message
                icon={<LuBadgeCheck color="#e4e4e7" />}
                title="Unchecked Reservations"
                description="You have unchecked reservations"
                data={<div className="text-zinc-50 text-2xl">23</div>}
              />
            </article>
          </section>
        </main>
      </header>
    </>
  );
};

export default Report;
