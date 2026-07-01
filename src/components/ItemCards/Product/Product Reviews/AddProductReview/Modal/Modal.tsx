import styles from "./Modal.module.scss";
import type { IModal } from "../../../../../../Interfaces/CommonInterfaces";

const Modal = ({ children, handleCloseModal }: IModal) => {
  return (
    <div className={styles.reviewModal}>
      <button
        type="button"
        className={styles.closeModalButton}
        onClick={handleCloseModal}
      >
        X
      </button>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};
export default Modal;
