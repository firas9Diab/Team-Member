import styles from "./DeleteCartItem.module.scss";
import type { IDeleteCartItem } from "../../../../../Interfaces";

const DeleteCartItem = ({
  selectedIdByCartItem,
  handleDeleteCart,
  titleCartItem,
  handleCloseModal,
}: IDeleteCartItem) => {
  return (
    <form className={styles.formGroup}>
      <div className={styles.formGroup}>
        Do you Delete ({titleCartItem}) from your Cart?
      </div>

      <div className={styles.modalActions}>
        <button
          type="button"
          onClick={() => handleDeleteCart(selectedIdByCartItem)}
          className={styles.modalButton}
        >
          Yes
        </button>

        <button
          type="button"
          onClick={handleCloseModal}
          className={styles.modalButton}
        >
          No
        </button>
      </div>
    </form>
  );
};

export default DeleteCartItem;
