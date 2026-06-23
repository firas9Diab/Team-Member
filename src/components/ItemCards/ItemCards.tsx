import type { IItemCards } from "../interface";
import styles from "./ItemCards.module.scss";
import Product from "./Product/Product";

const ItemCards = ({
  todayDeals,
  moreItemsToConsider,
  setCurrentPage,
  totalPages,
  currentPage,
  selectedCategoryId,
  products,
  search,
  show,
}: IItemCards) => {
  return (
    <>
      <div className={styles.todayDealsSection}>
        <div className={styles.sectionTitle}>{show ? "Today deals" : ""}</div>

        <div className={show ? styles.scrollProducts : styles.productGrid}>
          {show
            ? todayDeals.map((todayDeal) => (
                <Product key={todayDeal.id} card={todayDeal} />
              ))
            : products.map((product) => (
                <Product key={product.id} card={product} />
              ))}
        </div>

        <ul className={styles.paginationList}>
          {selectedCategoryId || search
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
                        ? styles.activePageButton
                        : styles.pageButton
                    }
                  >
                    {i + 1}
                  </button>
                );
              })
            : ""}
        </ul>
      </div>

      {show && (
        <div className={styles.moreItemsSection}>
          <div className={styles.sectionTitle}>More Items to Consider</div>

          <div className={styles.scrollProducts}>
            {moreItemsToConsider.map((item) => (
              <Product key={item.id} card={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCards;
