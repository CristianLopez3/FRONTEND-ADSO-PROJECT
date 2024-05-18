import Button from "@/components/Button";
import DashboardNavbar from "./components/dashboard/DashboardNavbar";
import styles from "./styles.module.css";
import { RiPencilLine } from "react-icons/ri";
import { useCallback, useState } from "react";
import EventCard from "./components/event/EventCard";
import { Modal } from "@/components/Modal";
import EventForm from "./components/event/EventForm";

const Events: React.FC = () => {
  const [addModal, setAddModal] = useState<boolean>(false);

  const toggleAddModal = useCallback(() => {
    setAddModal((prevState) => !prevState);
  }, []);

  return (
    <>
      <header>
        <DashboardNavbar>
          <h2 className={styles.title}>
            <div className={styles.title_line} />
            Event
          </h2>
          <Button
            variant="warning"
            className={styles.add_button}
            onClick={toggleAddModal}
          >
            <span>Update</span> <RiPencilLine />
          </Button>
        </DashboardNavbar>
      </header>

      <main className="px-2 md:px-8 mx-auto">
        <section className="flex justify-center items-center">
          <EventCard />
        </section>
      </main>

      <Modal open={addModal} onClose={toggleAddModal}>
        <EventForm  handleModal={toggleAddModal} />
      </Modal>
    </>
  );
};

export default Events;
