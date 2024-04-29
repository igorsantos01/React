/* eslint-disable react/prop-types */
import styles from "../Button/styles.module.css";

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
