import React from "react";

import styles from "./UserCard.module.scss";
import type { UserData } from "../../Home/Home";

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
          {user.isFavorite ? (
            <img src="/public/images/star-svgrepo-com.svg" />
          ) : (
            <img src="/public/images/star-light-svgrepo-com.svg" />
          )}
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
