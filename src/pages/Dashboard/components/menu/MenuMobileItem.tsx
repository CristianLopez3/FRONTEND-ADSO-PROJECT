import { useState } from "react";

import { Modal, DeleteModal } from "@/components/Modal";
import { Menu } from "@/utils/types/Menu";
import { PiTrash, PiPencil } from "react-icons/pi";
import Button from "@/components/Button";
import MenuForm from "./MenuForm";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteMenuAction } from "@/store/menus";

export type MenuMobileItemProps = { menu: Menu };

const MenuMobileItem: React.FC<MenuMobileItemProps> = ({ menu }) => {
  const { id, title, description, price, state } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = async () => {
    try {
      await dispatch(deleteMenuAction(+id!));
    } catch (error) {
      console.error("Failed to delete menu:", error);
    }
  };

  return (
    <>
      <article key={id} className={styles.mobile_container}>
        <div className={styles.text}>
          <div className="font-bold text-m\">{title}</div>
          <div>{state}</div>
        </div>
        <div className={styles.mobile_description}>{description}</div>
        <section className={styles.mobile_footer_section}>
          <div className={styles.mobile_buttons}>
            <Button
              variant="warning"
              className="p-2"
              onClick={() => setOpenUpdateModal(!openUpdateModal)}
            >
              <PiPencil />
            </Button>
            <Button
              variant="danger"
              className="p-2"
              onClick={() => setOpenDeleteModal(!openDeleteModal)}
            >
              <PiTrash />
            </Button>
          </div>
          <div className={`${styles.mobile_price}  `}>
            {price}
          </div>
        </section>
      </article>
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(!openDeleteModal)}
      >
        <DeleteModal onDelete={onDelete} name={title} />
      </Modal>

      <Modal
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(!openUpdateModal)}
      >
        <MenuForm
          mode="update"
          handleModal={() => setOpenUpdateModal(!openUpdateModal)}
          description={description}
          id={id}
          price={price}
          title={title}
        />
      </Modal>
    </>
  );
};

export default MenuMobileItem;
