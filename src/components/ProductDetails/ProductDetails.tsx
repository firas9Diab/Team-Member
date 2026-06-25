import useProductDetails from "./useProductDetails";
import styles from "./ProductDetails.module.scss";
import Free from "../../Assets/free.svg";
import Cod from "../../Assets/cod.svg";
import Returns from "../../Assets/returns.svg";
import Warranty from "../../Assets/warranty.svg";
import Brand from "../../Assets/brand.svg";
import Delivered from "../../Assets/delivered.svg";
import Payment from "../../Assets/payment.svg";
import CustomerReview from "../CustomerReview/CustomerReview";
import RenderStars from "../RenderStars/RenderStars";

const ProductDetails = () => {
  const {
    productDetails,
    reviews,
    selectedImg,
    handleSelectedImgChange,
    starRating,
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
    getPercentage,
    AddToCart,
    handleProductIdChange,
    handleQuantityChange,
    quantity,
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

  const average = reviews[0]?.summary.average ?? 0;

  if (!productDetails) {
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
                  <RenderStars starRating={starRating} rating={average} />

                  <p className={styles.ratingCount}>
                    {reviews[0]?.items.length} ratings
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
                <button
                  className={styles.buttonYellow}
                  onClick={() => AddToCart(productDetails.id, quantity)}
                >
                  Add To Cart
                </button>

                <input
                  className={styles.buttonOrange}
                  type="number"
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  placeholder="Quantity"
                />
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
        <CustomerReview
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          handleRatingChange={handleRatingChange}
          handleTitleChange={handleTitleChange}
          handleCommentChange={handleCommentChange}
          rating={rating}
          title={title}
          comment={comment}
          setShowReviewForm={setShowReviewForm}
          showReviewForm={showReviewForm}
          postReviews={postReviews}
          hoveredStar={hoveredStar}
          setHoveredStar={setHoveredStar}
          starBar={starBar}
          starRating={starRating}
          reviews={reviews}
          getPercentage={getPercentage}
        />
      </div>
    </>
  );
};

export default ProductDetails;
