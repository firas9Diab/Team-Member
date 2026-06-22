import Footer from "../Footer/Footer";
import useProductDetails from "./useProductDetails";
import styles from "./ProductDetails.module.scss";
import stars from "../../Assets/stars.svg";
import free from "../../Assets/free.svg";
import cod from "../../Assets/cod.svg";
import returns from "../../Assets/returns.svg";
import warranty from "../../Assets/warranty.svg";
import brand from "../../Assets/brand.svg";
import delivered from "../../Assets/delivered.svg";
import payment from "../../Assets/payment.svg";
import stars5 from "../../Assets/stars5.svg";
import stars4 from "../../Assets/stars4.svg";
import stars3 from "../../Assets/stars3.svg";
import stars2 from "../../Assets/stars2.svg";
import stars1 from "../../Assets/stars1.svg";
import profile from "../../Assets/profile.svg";
import moment from "moment";

const ProductDetails = () => {
  const {
    productDetails,
    reviews,
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
  } = useProductDetails();

  if (!productDetails || !reviews) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <div>
        <div>
          <div className={styles.details}>
            <div>
              <img
                className={styles.detailsimg}
                src={productDetails.images[0]?.url}
                alt={productDetails.images[0]?.alt}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.title}>{productDetails.description}</p>
              <p className={styles.brand}>Brand:{productDetails.brand}</p>
              <div className={styles.ratings}>
                <p className={styles.ratingAvg}>
                  {productDetails.ratingAverage}
                </p>
                <img src={stars} alt="stars" />
                <p className={styles.ratingCount}>
                  {productDetails.ratingCount} ratings
                </p>
              </div>
              <hr />
              <div className={styles.discount}>
                <p className={styles.discountPercent}>
                  -{productDetails.discountPercent}%
                </p>
                <p className={styles.price}>₹{productDetails.price}</p>
              </div>
              <p className={styles.oldPrice}>
                M.R.P: ₹{productDetails.oldPrice}
              </p>
              <div className={styles.discount}>
                <p>Quantity: </p>
                <button className={styles.stock}>{productDetails.stock}</button>
              </div>
              <div className={styles.buttons}>
                <button className={styles.buttonYellow}></button>
                <button className={styles.buttonOrange}></button>
              </div>
            </div>
          </div>
          <p className={styles.items}>About this item</p>
        </div>

        <div className={styles.images}>
          <img src={free} alt="free" />
          <img src={cod} alt="cod" />
          <img src={returns} alt="returns" />
          <img src={warranty} alt="warranty" />
          <img src={brand} alt="brand" />
          <img src={delivered} alt="delivered" />
          <img src={payment} alt="payment" />
        </div>
        <p className={styles.items}>Customer Review</p>
        <div className={styles.reviews}>
          <div>
            <div>
              <div className={styles.reviewsStars}>
                <img src={stars} alt="stars" />
                <p>{reviews.summary.average} out of 5</p>
              </div>
              <p className={styles.global}>
                {reviews.summary.total} global ratings
              </p>
            </div>
            <div className={styles.left}>
              <div className={styles.ratings}>
                <p>5 star </p>
                <img src={stars5} alt="stars" />
                <p>{reviews.summary.breakdown[5]}%</p>
              </div>
              <div className={styles.ratings}>
                <p>4 star </p>
                <img src={stars4} alt="stars" />
                <p>{reviews.summary.breakdown[4]}%</p>
              </div>
              <div className={styles.ratings}>
                <p>3 star </p>
                <img src={stars3} alt="stars" />
                <p>{reviews.summary.breakdown[3]}%</p>
              </div>
              <div className={styles.ratings}>
                <p>2 star </p>
                <img src={stars2} alt="stars" />
                <p>{reviews.summary.breakdown[2]}%</p>
              </div>
              <div className={styles.ratings}>
                <p>1 star </p>
                <img src={stars1} alt="stars" />
                <p>{reviews.summary.breakdown[1]}%</p>
              </div>
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
                    <input
                      type="number"
                      value={rating}
                      onChange={(e) => handleRatingChange(e.target.value)}
                      placeholder="Rating"
                    />

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

                    <button onClick={() => postReviews()}>Submit Review</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.reviewSenders}>
            {reviews?.items.map((review) => (
              <div key={review.id}>
                <div className={styles.reviewProfile}>
                  <img src={profile} alt={profile} />
                  <p>{review.reviewerName}</p>
                </div>
                <div className={styles.reviewStars}>
                  <img src={stars} alt="stars" />
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
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
