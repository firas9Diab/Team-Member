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
        <Modal
          title={title}
          comment={comment}
          rating={rating}
          setRating={setRating}
          handleChangeform={handleChangeform}
          handleCloseModal={handleCloseModal}
          handleAddProductReview={handleAddProductReview}
        />
      )}
    </div>
  );
};

export default AddProductReview;
