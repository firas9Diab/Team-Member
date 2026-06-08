import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
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
  loading: boolean;
  changeModal: (id: number | null, confirmDelete: boolean) => void;
  navigate: (n: string) => void;
};

const UserList = ({
  users,
  handleToggleFavorite,
  loading,
  changeModal,
  navigate,
}: UserListProps) => {
  return (
    <div className={styles.cardBoard}>
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
            changeModal={changeModal}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;
