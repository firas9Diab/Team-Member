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
};

const UserCard = ({ person }: UserCardProps) => {
  const [isFavorite, setIsFavorite] = useState(person.isFavorite);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!isFavorite) {
        await axios.post(
          `http://localhost:3000/users/me/favorites/${person.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setIsFavorite(true);
      } else {
        await axios.delete(
          `http://localhost:3000/users/me/favorites/${person.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setIsFavorite(false);
      }
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
          onClick={toggleFavorite}
          disabled={loading}
        >
          <img src={isFavorite ? fav : favLight} />
        </button>
      </div>

      <img src={person.avatar} className={styles.image} alt="" />
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
