import styles from "./AddProductReview.module.scss";
import useAddProductReview from "./useAddProductReview";
import Modal from "./Modal/Modal";
import type { IAddProductReview } from "../../../../interface";

const AddProductReview = ({
  id,
  isModalOpen,
  setIsModalOpen,
  handleGetProductReviews,
  handleGetProductDetails,
}: IAddProductReview) => {
  const {
    handleOpenModal,
    handleCloseModal,
    handleAddProductReview,
    handleChangeform,
    setRating,
    title,
    comment,
    rating,
  } = useAddProductReview({
    id,
    handleGetProductReviews,
    isModalOpen,
    setIsModalOpen,
    handleGetProductDetails,
  });

  return (
    <div className={styles.addProductReview}>
      <span>Review the Product</span>
      <span>Share your thoughts with our customers</span>

      <button className={styles.writeReviewButton} onClick={handleOpenModal}>
        Write a product review
      </button>

      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <form className={styles.formGroup}>
            <label>Rating:</label>

            <div className={styles.ratingStars} aria-required="true">
              {new Array(5).fill(0).map((_, i) => {
                const starValue = i + 1;

                return (
                  <span
                    key={starValue}
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
        </Modal>
      )}
    </div>
  );
};

export default AddProductReview;
