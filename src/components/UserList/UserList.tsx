import React from "react";
import type { UserData } from "../Home/Home";
import styles from "./UserList.module.scss";

import UserCard from "./UserCard/UserCard";

const UserList = ({ users, fav }: { users: UserData[]; fav: Function }) => {
  return (
    <>
      {users.length !== 0 ? (
        <div className={styles.card}>
          {users.map((user) => {
            return (
              <div>
                <div key={user.id}>
                  <UserCard user={user} fav={fav} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No users found"
      )}
    </>
  );
};

export default UserList;
