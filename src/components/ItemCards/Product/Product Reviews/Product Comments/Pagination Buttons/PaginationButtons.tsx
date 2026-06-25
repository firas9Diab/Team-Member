import styles from "./PaginationButtons.module.scss";
import type { IPaginationButtons } from "../../../../../interface";

const PaginationButtons = ({
  setReviewsCurrentPage,
  reviewsCurrentPage,
  reviewsTotalPages,
}: IPaginationButtons) => {
  return (
    <div className={styles.paginationButtons}>
      {new Array(reviewsTotalPages).fill(0).map((_, i) => {
        return (
          <button
            key={i + 1}
            onClick={() => {
              setReviewsCurrentPage(i + 1);
            }}
            disabled={reviewsCurrentPage === i + 1}
            className={
              reviewsCurrentPage === i + 1
                ? styles.activePageButton
                : styles.pageButton
            }
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationButtons;
