import styles from "./CartItems.module.scss";
import type { ICartItems } from "../../../../../Interfaces";

const CartItems = ({
  cart,
  handleOpenModal,
  handlechangeIdCartItem,
  trash,
  handlechangeTitleCartItem,
}: ICartItems) => {
  return (
    <>
      {cart.items.map((item) => (
        <div className={styles.cartItem} key={item.id}>
          <div className={styles.cartItem}>
            <div className={styles.cartItemImage}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.cartItemDetails}>
              <div className={styles.cartItemMainInfo}>
                <div>{item.title}</div>

                <div>
                  <span>
                    {new Array(5).fill(0).map((_, i) => (
                      <span key={i} className={styles.star}>
                        {i < Math.round(item?.ratingAverage || 0) ? (
                          <>&#9733;</>
                        ) : (
                          <>&#9734;</>
                        )}
                      </span>
                    ))}
                  </span>
                  <span className={styles.cartItemRatingCount}>
                    {" "}
                    {item.ratingCount}
                  </span>
                </div>

                <div>
                  <span>{item.price}</span>
                  <span> M.R.P: ₹{item.oldPrice}</span>
                  <span> ({item.discountPercent}% off)</span>
                </div>
              </div>

              <div>
                <div>Brand: {item.brand}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Line Total: ₹{item.lineTotal}</div>
              </div>
            </div>
          </div>

          <div className={styles.removeCartItem}>
            <button
              onClick={() => {
                handleOpenModal();
                handlechangeIdCartItem(Number(item.id));
                handlechangeTitleCartItem(item.title);
              }}
            >
              {" "}
              <img src={trash} alt="" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
