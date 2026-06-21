import type { IItemCards } from "../interface";
import styles from "./ItemCards.module.scss";
import Product from "./Product/Product";

const ItemCards = ({ todayDeals, moreItemsToConsider }: IItemCards) => {
  return (
    <>
      <div className={styles.container3}>
        <div className={styles.title}>Today’s Deals</div>

        <div className={styles.products}>
          {todayDeals.map((todayDeal) => (
            <Product card={todayDeal} />
          ))}
        </div>
      </div>

      <div className={styles.container4}>
        <div className={styles.title}>More Items to Consider</div>

        <div className={styles.products}>
          {moreItemsToConsider.map((item) => (
            <Product card={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemCards;
