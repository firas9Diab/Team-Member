import styles from "./ProductDetails.module.scss";
import type { IProductDetails } from "../../../../interface";
import classNames from "classnames";

const ProductDetails = ({
  selectedProduct,
  handleChangeImages,
  selectedImage,
  productFeatures,
}: IProductDetails) => {
  return (
    <>
      <div className={styles.productDetailsLayout}>
        <div className={styles.productGallery}>
          <div className={styles.thumbnailList}>
            {selectedProduct?.images?.map((image) => (
              <img
                key={image.id}
                className={classNames(styles.thumbnailImage, {
                  [styles.activeThumbnailImage]: image.id === selectedImage?.id,
                })}
                src={image.url}
                alt={image.alt}
                onClick={() => handleChangeImages(image)}
              />
            ))}
          </div>

          <div className={styles.mainImageWrapper}>
            {selectedImage && (
              <img
                className={styles.mainProductImage}
                src={selectedImage.url}
                alt={selectedImage.alt}
              />
            )}
          </div>
        </div>

        <div className={styles.productInfo}>
          <div>
            <p className={styles.productDescription}>
              {selectedProduct?.description}
            </p>

            <span className={styles.productBrand}>
              Brand: {selectedProduct?.brand}
            </span>

            <div className={styles.ratingSection}>
              <div className={styles.ratingScore}>
                <span>{selectedProduct?.ratingAverage}</span>

                {new Array(5).fill(0).map((_, i) => (
                  <span key={i + 1} className={styles.star}>
                    {i < Math.round(selectedProduct?.ratingAverage || 0) ? (
                      <>&#9733;</>
                    ) : (
                      <>&#9734;</>
                    )}
                  </span>
                ))}
              </div>

              <span className={styles.ratingCountText}>
                {selectedProduct?.ratingCount} ratings
              </span>
            </div>

            <div className={styles.priceSection}>
              <span>
                {selectedProduct?.discountPercent &&
                  `-${selectedProduct.discountPercent}%`}
              </span>

              <span>₹{selectedProduct?.price}</span>
            </div>
          </div>

          <div>M.R.P.: ₹{selectedProduct?.oldPrice}</div>

          <div>
            Quantity:
            <input type="text" className={styles.quantityInput} />
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.buyButton}>Buy Now</button>
            <button className={styles.checkoutButton}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={styles.productFeaturesSection}>
        <div>
          <h1 className={styles.featuresTitle}>About this item</h1>

          <div className={styles.featuresContent}>
            <ul className={styles.featuresList}>
              {productFeatures.map((feature) => (
                <li className={styles.featureItem} key={feature.id}>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
