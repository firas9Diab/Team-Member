import styles from "./Modal.module.scss";

interface Props {
  changeModal: (id: number | null, confirmDelete: boolean) => void;
}

const Modal = ({ changeModal }: Props) => {
  return (
    <div className={styles.popup}>
      <button type="button" className={styles.popupx} onClick={() => changeModal(null, false)}>
        X
      </button>

      <div className={styles.pucontentcontainer}>
        <h1>Do you want to delete this user?</h1>
      </div>

      <div className={styles.pubuttoncontainer}>
        <button type="button" onClick={() => changeModal(null, true)} className={styles.buttons}>
          Yes, delete.
        </button>

        <button type="button" onClick={() => changeModal(null, false)} className={styles.buttons}>
          No, thank you.
        </button>
      </div>
    </div>
  );
};

export default Modal;
