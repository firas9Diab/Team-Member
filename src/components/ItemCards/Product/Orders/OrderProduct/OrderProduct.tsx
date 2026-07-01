import styles from "./OrderProduct.module.scss";
import type { IOrderProduct } from "../../../../../Interfaces/OrderInterfaces";

const OrderProduct = ({ order }: IOrderProduct) => {
  return (
    <div className={styles.orderProduct}>
      <div className={styles.orderOverview}>
        <div>
          <div>ORDER PLACED</div>
          <div>{order.placedAt.slice(0, 10)}</div>
        </div>
        <div>
          <div>TOTAL</div>
          <div>{order.total}</div>
        </div>
        <div>
          <div>SHIP TO</div>
          <div>{order.shipToName}</div>
        </div>
        <div>
          <div>ORDER</div>
          <div>#{order.orderNumber}</div>
        </div>
      </div>
      <div className={styles.orderItems}>
        <div className={styles.orderItemsList}>
          {order.items.map((item) => (
            <div className={styles.orderItem} key={item.id}>
              <div className={styles.orderItemDetails}>
                <div className={styles.orderItemMainInfo}>
                  <div className={styles.orderItemImageWrapper}>
                    <h2>Arriving Today</h2>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.orderItemImage}
                    />
                    <h2>Quantity: {item.quantity}</h2>
                  </div>
                  <div className={styles.orderItemDescription}>
                    <div>{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderActions}>
          <button>Track Package</button>
          <button>Get Product support</button>
          <button>Cancel this delivery</button>
        </div>
      </div>
    </div>
  );
};
export default OrderProduct;
