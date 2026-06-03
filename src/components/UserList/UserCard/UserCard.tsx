import React from "react";
import styles from "./UserCard.module.scss";
import type { UserData } from "../../Home/Home";

import starLight from "../../../assets/starLight.svg";
import star from "../../../assets/star.svg";
import deleteIcon from "../../../assets/delete.svg";
const UserCard = ({
  user,
  fav,
  del,
}: {
  user: UserData;
  fav: Function;
  del: Function;
}) => {
  return (
    <>
      <div className={styles.cardItems}>
        <div className={styles.icons}>
          <button
            className={styles.delete}
            onClick={() => {
              del(user.id);
            }}
          >
            <img src={deleteIcon} />
          </button>

          <button
            className={styles.icon}
            onClick={() => {
              fav(user.id);
            }}
          >
            <img src={user.isFavorite ? starLight : star} />
          </button>
        </div>
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
