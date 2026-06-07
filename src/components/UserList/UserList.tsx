import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

type UserListProps = {
  users: User[];

  handleToggleFavorite: (id: number, isFavorite: boolean) => void | Promise<void>;
  setIsModelOpen: (isModelOpen: boolean) => void;
  isModelOpen: boolean;
  loading: boolean;
  error: string;
  setdeletedUserById: (deletedUserById: number | null) => void;
  onConfirm: (changeid: boolean) => void;
  onClose: () => void;
};

const UserList = ({
  users,
  handleToggleFavorite,
  setIsModelOpen,
  isModelOpen,
  loading,
  setdeletedUserById,
  onConfirm,
  onClose,
}: UserListProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardBoard}>
      {isModelOpen && <Modal onConfirm={onConfirm} onClose={onClose} />}

      {users.map((person) => (
        <div
          onClick={() => navigate(`/UpdateUser/${person.id}`)}
          className={styles.card}
          key={person.id}
        >
          <UserCard
            person={person}
            handleToggleFavorite={handleToggleFavorite}
            loading={loading}
            setdeletedUserById={setdeletedUserById}
            onConfirm={onConfirm}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
