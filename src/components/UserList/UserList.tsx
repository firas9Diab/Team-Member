import { type Dispatch, type SetStateAction } from "react";
import type { UserData } from "../../useHomeHook";
import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";

const UserList = ({
  users,
  handleToggleFav,
  currentPage,
  totalPages,
  handleDeleteUser,
  setCurrentPage,
}: {
  users: UserData[];
  handleToggleFav: (id: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  handleDeleteUser: (id: string) => void;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {" "}
        <button
          className={styles.addButton}
          onClick={() => {
            navigate("/AddUser");
          }}
        >
          Add User
        </button>
      </div>
      <div className={styles.card}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            handleToggleFav={handleToggleFav}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </div>

      {!users.length && "No users found"}

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
