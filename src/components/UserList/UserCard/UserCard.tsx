import styles from "./UserCard.module.scss";
import fav from "../../../../Icons/star-svgrepo-com.svg";
import favLight from "../../../../Icons/star-light-svgrepo-com.svg";
interface User {
  id: string;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}
type UserCardProps = {
  person: User;
};
const UserCard = ({ person }: UserCardProps) => {
  return (
    <>
      <div className={styles.star}>
        <img src={person.isFavorite === true ? fav : favLight} />
      </div>

      <img src={person.avatar} className={styles.image} alt="" />

      <h3>{person.name}</h3>

      <p>{person.role}</p>

      {person.status === "active" ? (
        <>
          <span className={styles.active}>
            {" "}
            <span className={styles.dotactive}></span>
            {person.status}
          </span>
        </>
      ) : (
        <>
          <span className={styles.inactive}>
            <span className={styles.dot}></span>
            Inactive
          </span>
        </>
      )}
    </>
  );
};

export default UserCard;
