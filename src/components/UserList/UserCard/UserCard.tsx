import styles from "./UserCard.module.scss";
import fav from "../../../../Icons/star-svgrepo-com.svg";
import favLight from "../../../../Icons/star-light-svgrepo-com.svg";
import deleteicon from "../../../../Icons/delete-user-svgrepo-com.svg";
interface User {
  id: number;
  name: string;
  role: string;
  status: string;
  isFavorite: boolean;
  avatar: string;
}

type UserCardProps = {
  person: User;

  setisModelOpen: (model: boolean) => void;
  setId: (id: number) => void;
  handleToggleFavorite: (id: number, isFavorite: boolean) => void;
  loading: boolean;
  
};

const UserCard = ({ person, setisModelOpen, setId, handleToggleFavorite, loading }: UserCardProps) => {




  return (
    <>
      <div className={styles.star}>
        <div

          onClick={(e) => {
            e.stopPropagation();
            setId(person.id);
            setisModelOpen(true);
          }}
        >
          <img src={deleteicon} alt="delete" />
        </div>
        <div
          onClick={(e) => {

            setisModelOpen(true);

            e.stopPropagation();
            // e.nativeEvent.stopImmediatePropagation();
          }}
          className={styles.deleteUser}
        >

        </div>
        <button
          className={styles.starbutton}
          onClick={(e) => {
            handleToggleFavorite(person.id, person.isFavorite);
            e.stopPropagation();
            // e.nativeEvent.stopImmediatePropagation();
          }}
          disabled={loading}
        >
          <img src={person.isFavorite ? fav : favLight} alt="favorite" />
        </button>
      </div>

      <img src={person.avatar} className={styles.image} alt={person.name} />

      <h3>{person.name}</h3>
      <p>{person.role}</p>

      {person.status === "active" ? (
        <span className={styles.active}>
          <span className={styles.dotactive}></span>
          {person.status}
        </span>
      ) : (
        <span className={styles.inactive}>
          <span className={styles.dot}></span>
          Inactive
        </span>
      )}
    </>
  );
};

export default UserCard;
