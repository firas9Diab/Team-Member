import styles from "./Modal.module.scss";
import type { IModal } from "../../../../../interface";

const Modal = ({
  handleCloseModal,
  handleAddProductReview,
  handleChangeform,
  setRating,
  rating,
  title,
  comment,
}: IModal) => {
  return (
    <div className={styles.reviewModal}>
      <button
        type="button"
        className={styles.closeModalButton}
        onClick={handleCloseModal}
      >
        X
      </button>

      <div className={styles.modalContent}>
        <form className={styles.formGroup} action="">
          <label>Rating:</label>

          <div className={styles.ratingStars} aria-required="true">
            {new Array(5).fill(0).map((_, i) => {
              const starValue = i + 1;

              return (
                <span
                  key={i + 1}
                  className={
                    starValue <= rating
                      ? styles.activeRatingStar
                      : styles.ratingStar
                  }
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
      </div>
    </div>
  );
};

export default Modal;
