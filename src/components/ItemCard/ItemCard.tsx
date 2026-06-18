import type { ItemCardProps } from "../../interface/interface";
import styles from "./ItemCard.module.scss";

const ItemCard = ({ todaysDeals, moreItems }: ItemCardProps) => {
  return (
    <>
      <div className={styles.line}>
        {todaysDeals.map((deal) => (
          <div key={deal.id} className={styles.deals}>
            <img src={deal.image} alt=" deals image " />
            <p>{deal.title}</p>
            <div className={styles.bottom}>
              <p>₹{deal.price}</p>
              <button> Buy Now !</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section4}>
        <div className={styles.title}>
          <h1>More Items to </h1>
          <h1 className={styles.underline}>Consider</h1>
        </div>
        <div className={styles.line}>
          {moreItems.map((item) => (
            <div key={item.id} className={styles.deals}>
              <img src={item.image} alt=" deals image " />
              <p>{item.title}</p>
              <div className={styles.bottom}>
                <p>₹{item.price}</p>
                <button> Buy Now !</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemCard;
