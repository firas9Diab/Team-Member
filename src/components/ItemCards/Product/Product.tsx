import styles from "./Product.module.scss"
import type { CardProps } from '../../interface'

const Product = ({card}:CardProps) => {
  return (
   <div key={card.id} className={styles.product}>
    <img src={card.image} alt="" className={styles.productimage} />

    <div className={styles.producttitle}>
      {card.title}
    </div>

    <div className={styles.price}>
      <div className={styles.numberprice}>
        ₹{card.price}
      </div>

      <button className={styles.buybutton}>
        <span>Buy Now!</span>
      </button>
    </div>
  </div>
  )
}

export default Product