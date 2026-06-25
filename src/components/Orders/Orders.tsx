import moment from "moment";
import useOrders from "./useOrders";
import styles from "./Orders.module.scss";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div>
      <div className={styles.container}>
        <h1>Your Orders</h1>
        <hr />
        {orders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHeader}>
              <div className={styles.orderInfo}>
                <div className={styles.orderTitle}>
                  <p>ORDER PLACED</p>
                  <p>{moment(order.placedAt).format("YYYY-MM-DD")}</p>
                </div>
                <div className={styles.orderTitle}>
                  <p>TOTAL</p>
                  <p>{order.total}</p>
                </div>
                <div className={styles.orderTitle}>
                  <p>SHIP TO</p>
                  <p>{order.shipToName}</p>
                </div>
                <div className={styles.orderTitle}>
                  <p>SHIP TO</p>
                  <p>{order.shipToName}</p>
                </div>
              </div>
              <div className={styles.orderNumber}>
                <p>ORDER</p>
                <p>{order.orderNumber}</p>
              </div>
            </div>
            <div className={styles.order}>
              <div className={styles.productInfo}>
                <p>Arriving Today</p>
                <img src={order.items[0].image} />
              </div>
              <div>
                <p className={styles.orderText}>{order.items[0].title}</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.Btn}>Track Package</button>
                <button className={styles.Btn}>Get Product support</button>
                <button className={styles.Btn}>Cancel this delivery</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
