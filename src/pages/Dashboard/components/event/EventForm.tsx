import { InputField } from "@/components/Input";
import styles from "./styles.module.css";
import Button from "@/components/Button";
import { useEffect, useRef } from "react";
import Image from "@/assets/patrick.jpg";

type EventFormProps = {
  handleModal: () => void;
};

const EventForm: React.FC<EventFormProps> = ({ handleModal }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1>Update The event</h1>
      </div>
      <form className={styles.form}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <InputField type="file" className={`${styles.input} font-normal`} />
            <InputField placeholder="title" className={styles.input} />
            <InputField
              type="number"
              placeholder="discount"
              className={styles.input}
            />
          </div>
          <img src={Image} alt="events image" className="w-56 h-56 mx-auto" />
        </div>
        <textarea
          ref={textareaRef}
          name="description"
          className={styles.textarea}
          id=""
          onInput={() => {
            textareaRef.current!.style.height = "auto";
            textareaRef.current!.style.height = `${
              textareaRef.current!.scrollHeight
            }px`;
          }}
        ></textarea>
        <div className={styles.footer}>
          <Button
            onClick={handleModal}
            variant="light"
            className="border border-zinc-800"
            content="CANCEL"
            type="button"
          />
          <Button variant="dark" content="UPDATE" type="submit" />
        </div>
      </form>
    </>
  );
};

export default EventForm;
