import type {
  moreItems,
  productItems,
  TodaysDeals,
} from "../../../interface/interface";
import styles from "./Card.module.scss";

type CardProps = {
  item: TodaysDeals | moreItems | productItems;
};

const Card = ({ item }: CardProps) => {
  return (
    <>
      <div className={styles.deals}>
        <img src={item.image} alt=" deals image " />
        <p>{item.title}</p>
        <div className={styles.bottom}>
          <p>₹{item.price}</p>
          <button> Buy Now !</button>
        </div>
      </div>
    </>
  );
};

export default Card;
