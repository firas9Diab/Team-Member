import React from "react";
import styles from "./UserCard.module.scss";
import type { UserData } from "../../Home/Home";
//import star from "../assets/star.svg";
import starLight from "../../../assets/starLight.svg";
import star from "../../../assets/star.svg";
const UserCard = ({ user, fav }: { user: UserData; fav: Function }) => {
  return (
    <>
      <div className={styles.cardItems}>
        <button
          className={styles.icon}
          onClick={() => {
            fav(user.id);
          }}
        >
          <img src={user.isFavorite ? starLight : star} />
        </button>
        <img src={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.role}</p>
        <div
          className={`${styles.statusRow} ${
            user.status === "active" ? styles.active : styles.inactive
          }`}
        >
          <span
            className={`${styles.dot} ${
              user.status === "active" ? styles.activeDot : styles.inactiveDot
            }`}
          ></span>
          <p>{user.status}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
