import type { IItemCard } from "../../interface/interface";
import styles from "./ItemCards.module.scss";
import Card from "./Card/Card";

const ItemCards = ({ todaysDeals, moreItems }: IItemCard) => {
  return (
    <>
      <div className={styles.line}>
        {todaysDeals.map((product) => (
          <Card key={product.id} Product={product} />
        ))}
      </div>

      <div className={styles.section4}>
        <div className={styles.title}>
          <h1>More Items to </h1>
          <h1 className={styles.underline}>Consider</h1>
        </div>
        <div className={styles.line}>
          {moreItems.map((product) => (
            <Card key={product.id} Product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemCards;
