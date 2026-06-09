import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
import type {UserListProps} from "../Home/Logic/interface"



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
