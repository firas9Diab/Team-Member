import classNames from "classnames";
import type { IItemCards } from "../../Interfaces/ProductInterfaces";
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
  showContainer,
  navigate,
}: IItemCards) => {
  return (
    <>
      <div className={styles.todayDealsSection}>
        <div className={styles.sectionTitle}>
          {showContainer ? "Today deals" : ""}
        </div>
        <div
          className={showContainer ? styles.scrollProducts : styles.productGrid}
        >
          {showContainer
            ? todayDeals.map((todayDeal) => (
                <Product
                  key={todayDeal.id}
                  card={todayDeal}
                  navigate={navigate}
                />
              ))
            : products.map((product) => (
                <Product key={product.id} card={product} navigate={navigate} />
              ))}
        </div>
      </div>
      {showContainer && (
        <div className={styles.moreItemsSection}>
          <div className={styles.sectionTitle}>More Items to Consider</div>
          <div className={styles.scrollProducts}>
            {moreItemsToConsider.map((item) => (
              <Product key={item.id} card={item} navigate={navigate} />
            ))}
          </div>
        </div>
      )}
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
                  className={classNames(styles.pageButton, {
                    [styles.activePageButton]: currentPage === i + 1,
                  })}
                >
                  {i + 1}
                </button>
              );
            })
          : null}
      </ul>
    </>
  );
};
export default ItemCards;
