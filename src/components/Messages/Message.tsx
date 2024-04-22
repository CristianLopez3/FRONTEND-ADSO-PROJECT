import { type ReactNode } from "react";
import styles from "./styles.module.css";
type MessageProps = {
  icon: ReactNode;
  title: string;
  description: string;
  data?: ReactNode;
};

const Message: React.FC<MessageProps> = ({
  icon,
  title,
  description,
  data,
}) => {
  return (
    <article className={styles.messageContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.contentContainer}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        {data && data}
      </div>
    </article>
  );
};

export default Message;
