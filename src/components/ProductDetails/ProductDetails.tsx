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
import profile from "../../Assets/profile.svg";
import filled from "../../Assets/filled.svg";
import empty from "../../Assets/empty.svg";
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
    selectedImg,
    handleSelectedImgChange,
    hoveredStar,
    setHoveredStar,
  } = useProductDetails();

  const getPercentage = (star: 1 | 2 | 3 | 4 | 5) =>
    ((reviews?.summary.breakdown[star] || 0) / (reviews?.summary.total || 1)) *
    100;

  const average = reviews?.summary?.average ?? 0;

  if (!productDetails || !reviews) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <div>
        <div>
          <div className={styles.details}>
            <div className={styles.small}>
              {productDetails.images.map((img, index) => (
                <button onClick={() => handleSelectedImgChange(index)}>
                  <img
                    key={img.id}
                    className={styles.smallImages}
                    src={img.url}
                    alt={img.alt}
                  />
                </button>
              ))}
            </div>
            <div>
              <img
                className={styles.detailsimg}
                src={productDetails.images[selectedImg]?.url}
                alt={productDetails.images[selectedImg]?.alt}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.title}>{productDetails.description}</p>
              <p className={styles.brand}>Brand:{productDetails.brand}</p>
              <div className={styles.ratings}>
                <p className={styles.ratingAvg}>
                  {productDetails.ratingAverage}
                </p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    className={styles.starsImg}
                    src={star <= Math.round(average) ? filled : empty}
                    alt="star"
                  />
                ))}
                <p className={styles.ratingCount}>
                  {reviews.items.length} ratings
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
          <ul className={styles.about}>
            {productDetails.features.map((about) => (
              <li key={about.id}>{about.text}</li>
            ))}
          </ul>
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
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    className={styles.starsImg}
                    src={
                      star <= Math.round(reviews.summary.average)
                        ? filled
                        : empty
                    }
                    alt="star"
                  />
                ))}
                <p>{reviews.summary.average} out of 5</p>
              </div>
              <p className={styles.global}>
                {reviews.summary.total} global ratings
              </p>
            </div>
            <div className={styles.left}>
              <div className={styles.ratings}>
                <p>5 star </p>
                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(5)}%` }}></div>
                </div>
                <p>{getPercentage(5).toFixed(1)}%</p>
              </div>
              <div className={styles.ratings}>
                <p>4 star </p>
                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(4)}%` }}></div>
                </div>
                <p>{getPercentage(4).toFixed(1)}%</p>
              </div>
              <div className={styles.ratings}>
                <p>3 star </p>
                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(3)}%` }}></div>
                </div>
                <p>{getPercentage(3).toFixed(1)}%</p>
              </div>
              <div className={styles.ratings}>
                <p>2 star </p>
                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(2)}%` }}></div>
                </div>
                <p>{getPercentage(2).toFixed(1)}%</p>
              </div>
              <div className={styles.ratings}>
                <p>1 star </p>
                <div className={styles.progressbar}>
                  <div style={{ width: `${getPercentage(1)}%` }}></div>
                </div>
                <p>{getPercentage(1).toFixed(1)}%</p>
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
                    <div className={styles.starRating}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          onClick={() => handleRatingChange(star.toString())}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className={styles.star}
                          src={star <= (hoveredStar || rating) ? filled : empty}
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
                <div className={styles.reviewTitle}>
                  <div className={styles.reviewStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <img
                        key={star}
                        className={styles.starsImg}
                        src={star <= Math.round(review.rating) ? filled : empty}
                        alt="star"
                      />
                    ))}
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
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
