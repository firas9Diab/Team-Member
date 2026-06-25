import styles from "./ProductReviews.module.scss";
import type { IProductReviews } from "../../../interface";
import ProductComments from "./Product Comments/ProductComments";
import AddProductReview from "./AddProductReview/AddProductReview";
import useProductReviews from "./useProductReviews";

const ProductReviews = ({
  selectedProduct,
  handleCalculateRatingPercentage,
  id,
  handleGetProductDetails,
}: IProductReviews) => {
  const {
    reviews,
    reviewsTotalPages,
    reviewsCurrentPage,
    handleChangeReviewsCurrentPage,
    userIcon,
    isModalOpen,
    setIsModalOpen,
    handleGetProductReviews,
  } = useProductReviews({ id });
  return (
    <div className={styles.productReviewsLayout}>
      <div className={styles.productReviewsSection}>
        <span>Customer Review</span>
        <div className={styles.reviewsContent}>
          <div className={styles.ratingSummary}>
            <div className={styles.reviewRating}>
              <div>
                {new Array(5).fill(0).map((_, i) => (
                  <span key={i} className={styles.star}>
                    {i < Math.round(selectedProduct?.ratingAverage || 0) ? (
                      <>&#9733;</>
                    ) : (
                      <>&#9734;</>
                    )}
                  </span>
                ))}
              </div>
              <span>
                {Math.round(selectedProduct?.ratingAverage || 0)} out of 5
              </span>
            </div>

            <div>{selectedProduct?.ratingCount} global ratings</div>
          </div>
          <div className={styles.ratingProgresses}>
            {...new Array(5).fill(0).map((_, i) => (
              <div className={styles.reviewBreakdown}>
                <span>{i + 1} Stars</span>
                <span>
                  {" "}
                  <progress
                    className={styles.ratingProgress}
                    value={handleCalculateRatingPercentage(i + 1)}
                    max={100}
                  />
                </span>
                <span>
                  {Math.round(handleCalculateRatingPercentage(i + 1))}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <AddProductReview
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          id={id}
          handleGetProductReviews={handleGetProductReviews}
          handleGetProductDetails={handleGetProductDetails}
        />
      </div>

      <ProductComments
        reviewsTotalPages={reviewsTotalPages}
        reviewsCurrentPage={reviewsCurrentPage}
        handleChangeReviewsCurrentPage={handleChangeReviewsCurrentPage}
        userIcon={userIcon}
        reviews={reviews}
        id={id}
      />
    </div>
  );
};

export default ProductReviews;
