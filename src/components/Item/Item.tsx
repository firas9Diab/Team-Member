import { useParams, useNavigate } from "react-router-dom";
import styles from "./Item.module.scss";

const Item = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Item Detail</h1>
      <p className={styles.detail}>
        Viewing item with ID: <span className={styles.id}>{id}</span>
      </p>
      <button className={styles.back} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
};

export default Item;
