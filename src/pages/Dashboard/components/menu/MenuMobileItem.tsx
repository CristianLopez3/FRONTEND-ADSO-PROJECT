import { useState } from "react";

import { Modal, DeleteModal } from "@/components/Modal";
import { Menu } from "@/types/Menu";
import { PiTrash, PiPencil } from "react-icons/pi";
import Button from "@/components/Button";
import MenuForm from "./MenuForm";
import { mobileItemStyles as styles } from "./constants";

export type MenuMobileItemProps = { menu: Menu };

const MenuMobileItem: React.FC<MenuMobileItemProps> = ({ menu }) => {
  const { id, title, description, price, state } = menu;
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const onDelete = () => {
    console.log(id);
  };
  return (
    <>
      <article key={id} className={styles.container}>
        <div className={styles.text}>
          <div>{title}</div>
          <div>{state}</div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.description}>{price}</div>
        <div className={styles.buttons}>
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
