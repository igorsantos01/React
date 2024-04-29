/* eslint-disable react/prop-types */
import LinkButton from "../LinkButton";
import ProfileInfo from "../ProfileInfo";
import styles from "./styles.module.css";
import Title from "../Title";
import { useState } from "react";

const ProfileCard = ({ imgProfile, name, biography, phone, email }) => {
  const [followText, setFollowText] = useState("Seguir");

  function handleClick() {
    alert("Agora você segue essa pessoa!");
    setFollowText("Seguindo");
  }
  return (
    <section className={styles.profileCard}>
      <img
        src={imgProfile}
        alt="Foto de Perfil"
        className={styles.profileImg}
      />
      <Title>
        <span>{name}</span>{" "}
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <ProfileInfo>{biography}</ProfileInfo>
      <ProfileInfo>{phone}</ProfileInfo>
      <ProfileInfo>{email}</ProfileInfo>
      <ProfileInfo id="links" className={styles.linkSection}>
        <LinkButton link={"//github.com/igorsantos01"}>GitHub</LinkButton>
        <LinkButton link={"https://linkedin.com/in/igorsantos01/"}>
          LinkedIn
        </LinkButton>
        <LinkButton link={"//www.twitter.com"}>Twitter</LinkButton>
      </ProfileInfo>
    </section>
  );
};

export default ProfileCard;
