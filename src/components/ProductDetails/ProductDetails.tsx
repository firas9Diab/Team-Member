import Footer from "../Footer/Footer";
import useProductDetails from "./useProductDetails";
import styles from "./ProductDetails.module.scss";
import Free from "../../Assets/free.svg";
import Cod from "../../Assets/cod.svg";
import Returns from "../../Assets/returns.svg";
import Warranty from "../../Assets/warranty.svg";
import Brand from "../../Assets/brand.svg";
import Delivered from "../../Assets/delivered.svg";
import Payment from "../../Assets/payment.svg";
import Profile from "../../Assets/profile.svg";
import Filled from "../../Assets/filled.svg";
import Empty from "../../Assets/empty.svg";
import moment from "moment";
import type { Star } from "../../interface/interface";

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
    starRating,
    starBar,
  } = useProductDetails();

  const images = [
    { name: "free", src: Free },
    { name: "cod", src: Cod },
    { name: "returns", src: Returns },
    { name: "warranty", src: Warranty },
    { name: "brand", src: Brand },
    { name: "delivered", src: Delivered },
    { name: "payment", src: Payment },
  ];

  const renderStars = (rating: number) => {
    return starRating.map((star) => (
      <img
        key={star}
        className={styles.starsImg}
        src={star <= Math.round(rating) ? Filled : Empty}
        alt="star"
      />
    ));
  };

  const getPercentage = (star: Star) =>
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
                className={styles.detailsImg}
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

                <div className={styles.ratings}>
                  {renderStars(average)}
                  <p className={styles.ratingCount}>
                    {reviews.items.length} ratings
                  </p>
                </div>
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
          {images.map((image) => (
            <div key={image.name}>
              <img src={image.src} alt={image.name} />
            </div>
          ))}
        </div>

        <p className={styles.items}>Customer Review</p>
        <div className={styles.reviews}>
          <div>
            <div>
              <div className={styles.reviewsStars}>
                {renderStars(average)}
                <p>{reviews.summary.average} out of 5</p>
              </div>
              <p className={styles.global}>
                {reviews.summary.total} global ratings
              </p>
            </div>
            <div className={styles.left}>
              {starBar.map((star: any) => (
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
            {reviews?.items.map((review) => (
              <div key={review.id}>
                <div className={styles.reviewProfile}>
                  <img src={Profile} alt={Profile} />
                  <p>{review.reviewerName}</p>
                </div>
                <div className={styles.reviewTitle}>
                  <div className={styles.reviewStars}>
                    {renderStars(review.rating)}
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
