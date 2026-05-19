import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = ({count}) => {

  return (<div className={styles.Header}>
 <div className={styles.Hicon}>
      <div>  <img src="../Icons/UsersIcon.svg" alt="" className={styles.icons} /> </div>
      <div><h1 className={styles.title}>Team Members</h1>
      <p>browser and filter team memebers </p></div>
      
    </div>

<div className={styles.usersCard}>
  <div>
    <h1 className={styles.label}>Total Users</h1>
    <h2 className={styles.count}>{count}</h2>
  </div>

  <div className={styles.icon}>
    <img src="../Icons/user.svg" alt="user" />
  </div>
</div>

  </div>
   
  );
};

export default Header;
