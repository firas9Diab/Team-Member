import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";

const UserList = ({ users }) => {

  

  return (
    <div className={styles.cardBoard}>
      {users.map((person) => (
        <div className={styles.card} key={person.id}>
          <UserCard person={person} />
        </div>
      ))}
    </div>
  );
};
export default UserList;


