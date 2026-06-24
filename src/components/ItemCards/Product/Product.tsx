import styles from "./Product.module.scss";
import type { IProduct } from "../../interface";

const Product = ({ card }: IProduct) => {
  return (
    <div key={card.id} className={styles.productCard}>
      <img src={card.image} alt="" className={styles.productImage} />

      <div className={styles.productTitle}>{card.title}</div>

      <div className={styles.productPrice}>
        <div className={styles.originalPrice}>₹{card.price}</div>

        <button className={styles.buyButton}>
          <span>Buy Now!</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
