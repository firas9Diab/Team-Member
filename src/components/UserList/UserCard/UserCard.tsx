import styles from "./UserCard.module.scss";
import type { UserData } from "../../Home/Home";
import starLight from "../../../assets/starLight.svg";
import star from "../../../assets/star.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
const UserCard = ({
  user,
  handleToggleFav,
  handleDeleteUser,
}: {
  user: UserData;
  handleToggleFav: (id: string) => void;
  handleDeleteUser: (id: string) => void;
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/UpdateUser/${user.id}`);
  };

  return (
    <>
      <div className={styles.cardItems} onClick={handleCardClick}>
        <div className={styles.icons} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.delete}
            onClick={() => {
              handleDeleteUser(user.id);
            }}
          >
            <img src={deleteIcon} />
          </button>

          <button
            className={styles.icon}
            onClick={() => {
              handleToggleFav(user.id);
            }}
          >
            <img src={user.isFavorite ? starLight : star} />
          </button>
        </div>
        <img src={user.avatar} className={styles.avatar} />
        <h1>{user.name}</h1>
        <p>{user.role}</p>
        <div
          className={`${styles.statusRow} ${
            user.status === "active" ? styles.active : styles.inactive
          }`}
        >
          <span
            className={`${styles.dot} ${
              user.status === "active" ? styles.activeDot : styles.inactiveDot
            }`}
          ></span>
          <p>{user.status}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
