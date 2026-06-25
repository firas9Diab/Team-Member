import type { IOrders } from "../../interface/interface";
import styles from "./OrderItem.module.scss";

const OrderItem = ({ order }: IOrders) => {
  return (
    <div>
      <div className={styles.order}>
        <div className={styles.allItems}>
          {order.items.map((item) => (
            <div className={styles.orderDetails}>
              <img className={styles.productInfo} src={item.image} />
              <p className={styles.orderText}>{item.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.Btn}>Track Package</button>
          <button className={styles.Btn}>Get Product support</button>
          <button className={styles.Btn}>Cancel this delivery</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
