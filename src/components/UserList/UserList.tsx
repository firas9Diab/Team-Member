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
  fetchUsers: () => void | Promise<void>;
};

const UserList = ({ users, fetchUsers }: UserListProps) => {
  const navigate = useNavigate();

  const [ismodelopen, setisModelOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);

  return (
    <div className={styles.cardBoard}>
      {ismodelopen && id !== null && (
        <Modal
          setisModelOpen={setisModelOpen}
          fetchUsers={fetchUsers}
          deletedperson={id}
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
            fetchUsers={fetchUsers}
            setisModelOpen={setisModelOpen}
            setId={setId}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;