import styles from "./ProductComments.module.scss";
import type { IProductComments } from "../../../../../Interfaces";
import PaginationButtons from "./Pagination Buttons/PaginationButtons";

const ProductComments = ({
  reviewsTotalPages,
  reviewsCurrentPage,
  handleChangeReviewsCurrentPage,
  userIcon,
  reviews,
}: IProductComments) => {
  return (
    <div className={styles.productComments}>
      {reviews.map((review) => (
        <div className={styles.productComment} key={review.id}>
          <div className={styles.userName}>
            <span>
              <img src={userIcon} alt="User" />
            </span>{" "}
            <span>{review.reviewerName}</span>
          </div>
          <div className={styles.commentHeader}>
            <div className={styles.stars}>
              {...new Array(5).fill(0).map((_, i) => (
                <span key={i} className={styles.star}>
                  {i < review.rating ? <>&#9733;</> : <>&#9734;</>}
                </span>
              ))}
            </div>
            <div className={styles.commentTitle}>{review.title}</div>
          </div>
          <div className={styles.commentInformation}>
            <div>Reviewed in India on {review.createdAt.slice(0, 10)}</div>
            <div className={styles.commentText}>{review.comment}</div>
          </div>
        </div>
      ))}
      <PaginationButtons
        handleChangeReviewsCurrentPage={handleChangeReviewsCurrentPage}
        reviewsCurrentPage={reviewsCurrentPage}
        reviewsTotalPages={reviewsTotalPages}
      />
    </div>
  );
};
export default ProductComments;
