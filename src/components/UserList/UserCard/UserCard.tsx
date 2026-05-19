import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./UserCard.module.scss";
import Fav from "../../../../Icons/star-svgrepo-com.svg"

const UserCard = ({ person }) => {
  return (
    <>
      <div className={styles.star}>
        {person.isFavorite === true ? (
          <img src={Fav} />
        ) : (
          <img src="../Icons/star-light-svgrepo-com.svg" />
        )}
      </div>

      <img src={person.avatar} className={styles.image} alt="" />

      <h3>{person.name}</h3>

      <p>{person.role}</p>

      {person.status === "active" ? (<>
         <span className={styles.active}> <span className={styles.dotactive}></span>
      
          {person.status}
        </span>
      </>) : (<>
<span className={styles.inactive}>
  <span className={styles.dot}></span>
  Inactive
</span>

        </>
      )}
    </>
  );
};

export default UserCard;