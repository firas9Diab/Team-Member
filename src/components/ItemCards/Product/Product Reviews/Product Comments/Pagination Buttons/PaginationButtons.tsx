import styles from "./PaginationButtons.module.scss";
import type { IPaginationButtons } from "../../../../../../Interfaces";
import classNames from "classnames";

const PaginationButtons = ({
  handleChangeReviewsCurrentPage,
  reviewsCurrentPage,
  reviewsTotalPages,
}: IPaginationButtons) => {
  return (
    <div className={styles.paginationButtons}>
      {new Array(reviewsTotalPages).fill(0).map((_, i) => {
        return (
          <button
            key={i + 1}
            className={classNames(styles.pageButton, {
              [styles.activePageButton]: reviewsCurrentPage === i + 1,
            })}
            onClick={() => {
              handleChangeReviewsCurrentPage(i + 1);
            }}
            disabled={reviewsCurrentPage === i + 1}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};
export default PaginationButtons;
