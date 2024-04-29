/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const ProfileInfo = ({ name, biography, phone, email }) => {
  return (
    <div className={styles.profileInfo}>
      <h2>{name}</h2>
      <p>{biography}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default ProfileInfo;
