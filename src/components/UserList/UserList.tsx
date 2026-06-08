import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import type { IUserListProps } from "../../interface";

const UserList = ({
  users,
  handleToggleFav,
  currentPage,
  totalPages,
  handleDeleteUser,
  setCurrentPage,
}: IUserListProps) => {
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
