import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

  handleDelete: (id: number) => void | Promise<void>;
  handleToggleFavorite: (id: number, isFavorite: boolean) => void | Promise<void>;
  setisModelOpen: (isModelOpen: boolean) => void;
  isModelOpen: boolean;
  loading: boolean;
  error: string;
 
};

const UserList = ({ users, handleToggleFavorite, handleDelete, setisModelOpen, isModelOpen, loading, error }: UserListProps) => {
  const navigate = useNavigate();


  const [id, setId] = useState<number | null>(null);

  return (
    <div className={styles.cardBoard}>
      {isModelOpen && id !== null && (
        <Modal
          setisModelOpen={setisModelOpen}

          handleDelete={handleDelete}
          deletedperson={id}
          error={error}
        
        />
      )}

      {users.map((person) => (
        <div
          onClick={() => navigate(`/UpdateUser/${person.id}`)}
          className={styles.card}
          key={person.id}
        >
          <UserCard
            person={person}

            setisModelOpen={setisModelOpen}
            setId={setId}
            handleToggleFavorite={handleToggleFavorite}
            loading={loading}

          />
        </div>
      ))}
    </div>
  );
};

export default UserList;