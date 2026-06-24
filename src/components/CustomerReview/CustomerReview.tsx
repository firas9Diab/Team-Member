import moment from "moment";
import styles from "./CustomerReview.module.scss";
import type { ICustomerReview, Star } from "../../interface/interface";
import Filled from "../../Assets/filled.svg";
import Empty from "../../Assets/empty.svg";
import Profile from "../../Assets/profile.svg";
import RenderStars from "../RenderStars/RenderStars";

const CustomerReview = ({
  page,
  setPage,
  totalPages,
  handleRatingChange,
  handleTitleChange,
  handleCommentChange,
  rating,
  title,
  comment,
  setShowReviewForm,
  showReviewForm,
  postReviews,
  hoveredStar,
  setHoveredStar,
  starBar,
  reviews,
  starRating,
  getPercentage,
}: ICustomerReview) => {
  const average = reviews[0]?.summary.average ?? 0;

  return (
    <>
      <div className={styles.reviews}>
        <div>
          <div>
            <div className={styles.reviewsStars}>
              <RenderStars starRating={starRating} rating={average} />

              <p>{reviews[0]?.summary.average} out of 5</p>
            </div>
            <p className={styles.global}>
              {reviews[0]?.summary.total} global ratings
            </p>
          </div>
          <div className={styles.left}>
            {starBar.map((star: Star) => (
              <div key={star} className={styles.ratings}>
                <p>{star} star</p>

                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(star)}%` }}></div>
                </div>

                <p>{getPercentage(star).toFixed(1)}%</p>
              </div>
            ))}

            <div className={styles.write}>
              <p className={styles.writeTitle}>Review the Product</p>
              <p className={styles.writeP}>
                Share your thoughts with our customers
              </p>
              <button onClick={() => setShowReviewForm((prev) => !prev)}>
                Write a product review
              </button>

              {showReviewForm && (
                <div className={styles.reviewForm}>
                  <div className={styles.starRating}>
                    {starRating.map((star) => (
                      <img
                        key={star}
                        onClick={() => handleRatingChange(star.toString())}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className={styles.star}
                        src={star <= (hoveredStar || rating) ? Filled : Empty}
                      />
                    ))}
                  </div>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Review title"
                  />

                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => handleCommentChange(e.target.value)}
                    placeholder="Write your review"
                  />

                  <button onClick={postReviews}>Submit Review</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.reviewSenders}>
          {reviews[0]?.items.map((review) => (
            <div key={review.id}>
              <div className={styles.reviewProfile}>
                <img src={Profile} alt={Profile} />
                <p>{review.reviewerName}</p>
              </div>
              <div className={styles.reviewTitle}>
                <div className={styles.reviewStars}>
                  <RenderStars starRating={starRating} rating={review.rating} />
                </div>
                <h3>{review.title}</h3>
              </div>
              <p>
                Reviewed in India on
                {moment(review.createdAt).format("MMMM D, YYYY")}
              </p>
              <br />
              <p className={styles.comment}>{review.comment}</p>
            </div>
          ))}
          <div className={styles.pagination}>
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
