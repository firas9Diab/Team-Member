import styles from "./DeleteCartItem.module.scss";
import type { IDeleteCartItem } from "../../../../../Interfaces";
import Modal from "../../Product Reviews/AddProductReview/Modal/Modal";

const DeleteCartItem = ({
  handleConfirmDeleteCartItem,
  selectedCartItemTitle,
  handleCloseDeleteModal,
}: IDeleteCartItem) => {
  return (
    <Modal handleCloseModal={handleCloseDeleteModal}>
      <div className={styles.formGroup}>
        <div className={styles.formGroup}>
          Do you Delete ({selectedCartItemTitle}) from your Cart?
        </div>

        <div className={styles.modalActions}>
          <button
            type="button"
            onClick={handleConfirmDeleteCartItem}
            className={styles.modalButton}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={handleCloseDeleteModal}
            className={styles.modalButton}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCartItem;
