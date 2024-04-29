/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
const ProfileInfo = (props) => {
  return (
    <div {...props} className={`${styles.profileInfo} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ProfileInfo;
