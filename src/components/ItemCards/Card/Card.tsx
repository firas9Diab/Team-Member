import type { ICard } from "../../../interface/interface";
import styles from "./Card.module.scss";

const Card = ({ Product }: ICard) => {
  return (
    <>
      <div className={styles.deals}>
        <img src={Product.image} alt=" deals image " />
        <p>{Product.title}</p>
        <div className={styles.bottom}>
          <p>₹{Product.price}</p>
          <button> Buy Now !</button>
        </div>
      </div>
    </>
  );
};

export default Card;
