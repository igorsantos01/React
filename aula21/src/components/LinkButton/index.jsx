/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const LinkButton = ({ children, link }) => {
  return (
    <a
      href={link}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkButton;
