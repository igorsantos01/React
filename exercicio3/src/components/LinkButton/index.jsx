/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const LinkButton = ({ textBtn, link }) => {
  return (
    <a
      href={link}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {textBtn}
    </a>
  );
};

export default LinkButton;
