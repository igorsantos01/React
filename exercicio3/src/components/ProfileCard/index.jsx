/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton";
import ProfileInfo from "../ProfileInfo";
import styles from "./styles.module.css";

const ProfileCard = ({ imgProfile, name, biography, phone, email }) => {
  return (
    <section className={styles.profileCard}>
      <img
        src={imgProfile}
        alt="Foto de Perfil"
        className={styles.profileImg}
      />
      <ProfileInfo
        name={name}
        biography={biography}
        phone={phone}
        email={email}
      />
      <LinkButton textBtn={"GitHub"} link={"//github.com/igorsantos01"} />
      <LinkButton
        textBtn={"LinkedIn"}
        link={"https://linkedin.com/in/igorsantos01/"}
      />
      <LinkButton textBtn={"Twitter"} link={"//www.twitter.com"} />
    </section>
  );
};

export default ProfileCard;
