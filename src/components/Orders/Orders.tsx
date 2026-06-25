import moment from "moment";
import useOrders from "./useOrders";
import styles from "./Orders.module.scss";
import OrderItems from "../OrderItem/OrderItem";

const Orders = () => {
  const { orders } = useOrders();

  return (
    <div>
      <div className={styles.container}>
        <h1>Your Orders</h1>
        <hr />
        {orders.length === 0 && (
          <p className={styles.empty}>no cart is available</p>
        )}
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
            <p className={styles.Arriving}>Arriving Today</p>
            <OrderItems order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
