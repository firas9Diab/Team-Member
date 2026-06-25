import RenderStars from "../RenderStars/RenderStars";
import useCart from "./useCart";
import styles from "./Cart.module.scss";
import deleteSvg from "../../Assets/deleteSvg.svg";

const Cart = () => {
  const { cart, starRating, total, subtotal, Delete, AddToOrder } = useCart();

  return (
    <>
      <div className={styles.Shopping}>
        <h1>Shopping Cart</h1>
        <hr />
        <div className={styles.ShoppingItem}>
          {cart.map((item) => (
            <div className={styles.Item}>
              <div>
                <img className={styles.ItemImg} src={item.image} />
              </div>
              <div className={styles.ItemDescription}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.stars}>
                  <RenderStars
                    starRating={starRating}
                    rating={item.ratingAverage}
                  />
                  <p>{item.ratingCount}</p>
                </div>
                <div className={styles.price}>
                  <h3>₹{item.price}</h3>
                  <p className={styles.oldPrice}>M.R.P: ₹{item.oldPrice}</p>
                  <p className={styles.discount}>
                    ({item.discountPercent}% off)
                  </p>
                </div>
                <div className={styles.brand}>
                  <p>Brand:{item.brand}</p>
                  <p>2 year warranty</p>
                  <p>Free Delivery</p>
                </div>
              </div>
              <button className={styles.delete} onClick={() => Delete(item.id)}>
                <img src={deleteSvg} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <p>
            Subtotal ( {total} items) : <h3> ₹{subtotal}</h3>
          </p>
          <button onClick={AddToOrder}>Proceed to buy</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
