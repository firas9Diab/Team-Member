import type { IItemCards } from "../interface";
import styles from "./ItemCards.module.scss";
import Product from "./Product/Product";

const ItemCards = ({
  todayDeals,
  moreItemsToConsider,
  setCurrentPage,
  totalPages,
  currentPage,
  selectedcategoryId,
  products,
}: IItemCards) => {
  return (
    <>
      <div className={styles.todaydealssection}>
        <div className={styles.title}>Today’s Deals</div>

        <div
          className={
            !selectedcategoryId ? styles.scrollproducts : styles.products
          }
        >
          {!selectedcategoryId
            ? todayDeals.map((todayDeal) => (
                <Product key={todayDeal.id} card={todayDeal} />
              ))
            : products.map((product) => (
                <Product key={product.id} card={product} />
              ))}
        </div>

        <ul className={styles.list}>
          {selectedcategoryId
            ? new Array(totalPages).fill(0).map((_, i) => {
                return (
                  <button
                    key={i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                    }}
                    disabled={currentPage === i + 1}
                    className={
                      currentPage === i + 1
                        ? styles.activepagebutton
                        : styles.pagebutton
                    }
                  >
                    {i + 1}
                  </button>
                );
              })
            : ""}
        </ul>
      </div>

      {!selectedcategoryId && (
        <div className={styles.moreitemssection}>
          <div className={styles.title}>More Items to Consider</div>

          <div className={styles.scrollproducts}>
            {moreItemsToConsider.map((item) => (
              <Product card={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCards;
