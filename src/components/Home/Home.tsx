import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { useState } from "react";

const Home = () => {
  const [items] = useState<number[]>([1, 2, 3]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <ul className={styles.list}>
        {items.map((id) => (
          <li key={id}>
            <Link to={`/item/${id}`} className={styles.link}>
              View Item {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
