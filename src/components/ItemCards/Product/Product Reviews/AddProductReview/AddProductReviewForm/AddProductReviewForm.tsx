import type { IAddProductReviewForm } from "../../../../../../Interfaces";
import styles from "./AddProductReviewForm.module.scss";
import classNames from "classnames";

const AddProductReviewForm = ({
  handleCloseModal,
  handleAddProductReview,
  handleChangeform,
  setRating,
  rating,
  title,
  comment,
}: IAddProductReviewForm) => {
  return (
    <form className={styles.formGroup}>
      <label>Rating:</label>

      <div className={styles.ratingStars}>
        {new Array(5).fill(0).map((_, i) => {
          const starValue = i + 1;

          return (
            <span
              key={starValue}
              className={classNames(styles.ratingStar, {
                [styles.activeRatingStar]: starValue <= rating,
              })}
              onClick={() => setRating(starValue)}
            >
              &#9733;
            </span>
          );
        })}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>

        <input
          id="title"
          type="text"
          value={title}
          name="title"
          className={styles.reviewInput}
          onChange={handleChangeform}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="comment">Write your review:</label>

        <textarea
          id="comment"
          name="comment"
          rows={4}
          cols={50}
          value={comment}
          className={styles.reviewTextarea}
          onChange={handleChangeform}
          required
        />
      </div>

      <div className={styles.modalActions}>
        <button
          type="button"
          onClick={handleAddProductReview}
          className={styles.modalButton}
        >
          Submit Review
        </button>

        <button
          type="button"
          onClick={handleCloseModal}
          className={styles.modalButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProductReviewForm;
