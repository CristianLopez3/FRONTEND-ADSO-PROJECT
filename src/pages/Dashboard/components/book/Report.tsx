import { RiArrowGoBackLine } from "react-icons/ri";

import styles from "../../styles.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/constants";
import DashboardNavbar from "../dashboard/DashboardNavbar";

const Report = () => {
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
              className="px-2 flex items-center gap-x-2 bg-zinc-300 text-zinc-900 rounded-md"
            >
              Back <RiArrowGoBackLine />
            </Link>
          </div>
        </DashboardNavbar>
      </header>
    </>
  );
};

export default Report;
