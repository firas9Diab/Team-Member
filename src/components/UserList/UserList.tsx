import styles from "./UserList.module.scss";
import UserCard from "./UserCard/UserCard";
interface User {
  id: string;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <div className={styles.cardBoard}>
      {users.map((person:User) => (
        <div className={styles.card} key={person.id}>
          <UserCard person={person} />
        </div>
      ))}
    </div>
  );
};
export default UserList;
