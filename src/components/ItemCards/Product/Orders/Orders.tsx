import Footer from "../../../../Footer/Footer";
import OrderProduct from "./OrderProduct/OrderProduct";
import styles from "./Orders.module.scss";
import useOrders from "./useOrders";

const Orders = () => {
  const { orders } = useOrders();
  return (
    <>
      <div className={styles.orderPage}>
        <div className={styles.orderContent}>
          <h1 className={styles.orderTitle}>Your Orders</h1>

          <div className={styles.orderMain}>
            {orders.map((order) => (
              <OrderProduct key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
