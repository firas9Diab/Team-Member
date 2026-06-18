import type { ItemCardProps } from "../../interface/interface";
import styles from "./ItemCards.module.scss";
import Card from "./Card/Card";

const ItemCards = ({ todaysDeals, moreItems }: ItemCardProps) => {
  return (
    <>
      <div className={styles.line}>
        {todaysDeals.map((deal) => (
          <Card key={deal.id} item={deal} />
        ))}
      </div>

      <div className={styles.section4}>
        <div className={styles.title}>
          <h1>More Items to </h1>
          <h1 className={styles.underline}>Consider</h1>
        </div>
        <div className={styles.line}>
          {moreItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemCards;
