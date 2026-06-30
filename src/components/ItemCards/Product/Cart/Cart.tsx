import styles from "./Cart.module.scss";
import CartItems from "./CartItems/CartItems";
import DeleteCartItem from "./DeleteCartItem/DeleteCartItem";
import useCart from "./useCart";

const Cart = () => {
  const {
    cart,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    selectedCartItemTitle,
    handleConfirmDeleteCartItem,
    handleSelectCartItem,
    handlechangeTitleCartItem,
    handleAddtoOrders,
  } = useCart();

  if (!cart) return null;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContent}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>

        <div className={styles.cartMain}>
          <div className={styles.cartProducts}>
            <CartItems
              cart={cart}
              handleOpenDeleteModal={handleOpenDeleteModal}
              handleSelectCartItem={handleSelectCartItem}
              handlechangeTitleCartItem={handlechangeTitleCartItem}
            />
          </div>
          {isDeleteModalOpen && (
            <DeleteCartItem
              handleConfirmDeleteCartItem={handleConfirmDeleteCartItem}
              selectedCartItemTitle={selectedCartItemTitle}
              handleCloseDeleteModal={handleCloseDeleteModal}
            />
          )}
          <div className={styles.checkoutSummary}>
            <span>
              Subtotal ({cart.totalItems} items): ₹{cart.subtotal}
            </span>

            <button
              className={styles.checkoutButton}
              onClick={handleAddtoOrders}
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
