import styles from "./CartItems.module.scss";
import type { ICartItems } from "../../../../../Interfaces/CartInterfaces";
import TrashIcon from "../../../../../../public/icons/Trash.svg";

const CartItems = ({ cart, handleConfirmDeleteCartItem }: ICartItems) => {
  return (
    <>
      {cart.items.map((order) => (
        <div className={styles.cartItem} key={order.id}>
          <div className={styles.cartItemContent}>
            <div className={styles.cartItemImage}>
              <img src={order.image} alt={order.title} />
            </div>
            <div className={styles.cartItemDetails}>
              <div className={styles.cartItemMainInfo}>
                <div>{order.title}</div>
                <div>
                  <span>
                    {new Array(5).fill(0).map((_, i) => (
                      <span key={i} className={styles.star}>
                        {i < Math.round(order?.ratingAverage || 0) ? (
                          <>&#9733;</>
                        ) : (
                          <>&#9734;</>
                        )}
                      </span>
                    ))}
                  </span>
                  <span className={styles.cartItemRatingCount}>
                    {" "}
                    {order.ratingCount}
                  </span>
                </div>
                <div>
                  <span>{order.price}</span>
                  <span> M.R.P: ₹{order.oldPrice}</span>
                  <span> ({order.discountPercent}% off)</span>
                </div>
              </div>
              <div>
                <div>Brand: {order.brand}</div>
                <div>Quantity: {order.quantity}</div>
                <div>Line Total: ₹{order.lineTotal}</div>
              </div>
            </div>
          </div>
          <div className={styles.removeCartItem}>
            <button
              onClick={() => {
                handleConfirmDeleteCartItem(order.id, order.title);
              }}
            >
              {" "}
              <img src={TrashIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default CartItems;
