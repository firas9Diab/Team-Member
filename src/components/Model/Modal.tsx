import { useState } from "react";
import styles from "./Modal.module.scss";
import axios from "axios";

interface Props {
  setisModelOpen: (model: boolean) => void;
  fetchUsers: () => void | Promise<void>;
  deletedperson: number;
}

const Modal = ({ setisModelOpen, fetchUsers, deletedperson }: Props) => {
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:3000/team-members/${deletedperson}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchUsers();
      setisModelOpen(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete user");
    }
  };

  return (
    <div className={styles.popup}>
      <button
        type="button"
        className={styles.popupx}
        onClick={() => setisModelOpen(false)}
      >
        X
      </button>

      <div className={styles.pucontentcontainer}>
        <h1>Do you want to delete this user?</h1>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.pubuttoncontainer}>
        <button type="button" onClick={handleDelete}>
          Yes, delete.
        </button>

        <button type="button" onClick={() => setisModelOpen(false)}>
          No, thank you.
        </button>
      </div>
    </div>
  );
};

export default Modal;