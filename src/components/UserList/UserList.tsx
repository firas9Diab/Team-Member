import { useState } from "react";
import { type Dispatch, type SetStateAction } from "react";
import type { UserData } from "../Home/Home";
import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import Popup from "../Popup/Popup";

const UserList = ({
  users,
  Favorite,
  currentPage,
  totalPages,
  Delete,
  setCurrentPage,
}: {
  users: UserData[];
  Favorite: (id: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  Delete: (id: string) => void;
}) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = (id: string) => {
    setSelectedUserId(id);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    if (selectedUserId) {
      Delete(selectedUserId);
    }
    setSelectedUserId(null);
    setShowPopup(false);
  };

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
      {users.length !== 0 ? (
        <div className={styles.card}>
          {users.map((user) => {
            return (
              <div>
                <div key={user.id}>
                  <UserCard
                    user={user}
                    Favorite={Favorite}
                    Delete={handleDeleteClick}
                  />
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

      {showPopup && (
        <Popup
          handleDeleteTrue={confirmDelete}
          handleCancel={() => {
            setShowPopup(false);
            setSelectedUserId(null);
          }}
        />
      )}
    </>
  );
};

export default UserList;
