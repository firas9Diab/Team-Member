import styles from "./UserCard.module.scss";
import fav from "../../../../Icons/star-svgrepo-com.svg";
import favLight from "../../../../Icons/star-light-svgrepo-com.svg";
import { useState } from "react";
import axios from "axios";

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
  fetchUsers: () => void | Promise<void>;
};

const UserCard = ({ person, fetchUsers }: UserCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [clickfavorite, setClickFavorite] = useState<boolean>(
    person.isFavorite,
  );
  const handleToggleFavorite = async (id: number, isFavorite: boolean) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!isFavorite) {
        await axios.post(
          `http://localhost:3000/users/me/favorites/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setClickFavorite(true);
      } else {
        await axios.delete(`http://localhost:3000/users/me/favorites/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClickFavorite(false);
      }

      await fetchUsers();
    } catch (error) {
      console.error("Favorite error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.star}>
        <button
          className={styles.starbutton}
          onClick={() => handleToggleFavorite(person.id, person.isFavorite)}
          disabled={loading}
        >
          <img src={clickfavorite ? fav : favLight} alt="favorite" />
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
