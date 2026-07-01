import styles from "./Cart.module.scss";
import CartItems from "./CartItems/CartItems";
import useCart from "./useCart";

const Cart = () => {
  const { cart, handleConfirmDeleteCartItem, handleAddToOrders } = useCart();
  if (!cart) return null;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContent}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>
        <div className={styles.cartMain}>
          <div className={styles.cartProducts}>
            <CartItems
              cart={cart}
              handleConfirmDeleteCartItem={handleConfirmDeleteCartItem}
            />
          </div>
          <div className={styles.checkoutSummary}>
            <span>
              Subtotal ({cart.totalItems} items): ₹{cart.subtotal}
            </span>
            <button
              className={styles.checkoutButton}
              onClick={handleAddToOrders}
            >
              Proceed to buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
