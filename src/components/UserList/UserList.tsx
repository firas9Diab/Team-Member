import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { UserData } from "../Home/Home";
import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";

const UserList = ({
  users,
  fav,
  add,
  currentPage,
  totalPages,
  del,

  setCurrentPage,
}: {
  users: UserData[];
  fav: Function;
  add: Function;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  del: Function;
}) => {
  const [click, setClick] = useState(false);
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <>
      <div>
        {" "}
        <button
          className={styles.addButton}
          onClick={() => {
            !click ? setClick(true) : setClick(false);
          }}
        >
          Add User
        </button>
        {click ? (
          <div className={styles.fullForm}>
            <form className={styles.form}>
              <label>fullName</label>
              <input
                type="text"
                onChange={(e) => setFullName(e.target.value)}
              />
              <label>jobTitle</label>
              <input
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <label>status</label>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option>select</option>
                <option>active</option>
                <option>inactive</option>
              </select>

              <label>AvatarUrl</label>
              <input
                type="text"
                onChange={(e) => setAvatarUrl(e.target.value)}
              />
            </form>
            <button
              type="button"
              className={styles.formButton}
              onClick={() => {
                (add(fullName, jobTitle, status, avatarUrl), setClick(false));
              }}
            >
              save
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {users.length !== 0 ? (
        <div className={styles.card}>
          {users.map((user) => {
            return (
              <div>
                <div key={user.id}>
                  <UserCard user={user} fav={fav} del={del} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No users found"
      )}

      <div className={styles.pages}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserList;
